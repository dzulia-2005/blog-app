import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '@radix-ui/react-label'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@tanstack/react-query';
import {register} from '../../supabase/auth/index'




const SignIn:React.FC = () => {
    const{t}=useTranslation()

    const [registerPayload, setRegisterPayload] = useState({
        email: "",
        password: "",
        username : ""
      });
    
      const { mutate: handleRegister } = useMutation({
        mutationKey: ["register"],
        mutationFn: register,
      });
    
      const handleSubmit = () => {
        const isEmailFilled = !!registerPayload.email;
        const isPasswordFilled = !!registerPayload.password;
        const isuserfill = !!registerPayload.username
    
        if (isEmailFilled && isPasswordFilled && isuserfill) {
          handleRegister(registerPayload);
        }
      };
  return (
    <div className='min-h-screen flex flex-item justify-center items-center'>
        <Card className="w-[440px] h-[550px]">
            <CardHeader className='flex justify-center items-center'>
                <CardTitle>{t('signup.title')}</CardTitle>
                <CardDescription>{t('signup.undertitle')}</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                        <Label className='text-bold text-sm' htmlFor="framework">{t('signup.Name')}</Label>
                        <Input 
                            id="name" 
                            placeholder='John Doe' 
                            value={registerPayload.username}
                                    onChange={(e) => 
                                        setRegisterPayload({
                                            username: e.target.value,
                                            email:registerPayload.email,
                                            password:registerPayload.password
                                        })
                                    } 
                            />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label className='text-bold text-sm' htmlFor="name">{t('signup.Email')}</Label>
                        <Input 
                            id="name" 
                            placeholder="John@example.com" 
                            value={registerPayload.email}
                            onChange={(e)=>{
                                setRegisterPayload({
                                username:registerPayload.username ,   
                                email:e.target.value , 
                                password:registerPayload.password
                            })
                          }}
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label 
                            className='text-bold text-sm' htmlFor="framework">{t('signup.Password')}</Label>
                        <Input 
                            id="name" 
                            type='password'
                             value={registerPayload.password}
                             onChange={(e)=>{
                                setRegisterPayload({
                                    username:registerPayload.username,
                                    email:registerPayload.email,
                                    password:e.target.value
                                })
                             }}
                            />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label className='text-bold text-sm' htmlFor="framework">{t('signup.CP')}</Label>
                        <Input id="name"  />
                    </div>
                    
                </div>
                </form>
                <div className='flex justify-center mt-4'>
                    <Button onClick={handleSubmit} className='w-96 bg-[#3D61FF]'>{t('signup.signup')}</Button>
                </div>
            </CardContent>
            <CardFooter className='flex justify-center text-sm items-center'>
                    <span >{t('signup.AC')}</span>
                    <NavLink to={'/login'}><span className='text-[#3D61FF]' >{t('signup.LI')}</span></NavLink>
            </CardFooter>
        </Card>
    </div>
  )
}

export default SignIn