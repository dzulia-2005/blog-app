import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Button } from '../../components/ui/button'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@tanstack/react-query'
import { login } from '../../supabase/auth'


const Login:React.FC = () => {
    const {t} = useTranslation()
    const[loginpayload,setLoginpayload]=useState({
        email:"",
        password:""
    })

    const {mutate:handlelogin} = useMutation({
        mutationKey:["login"],
        mutationFn : login,
    })

    const handlesubmit = () => {
        const ismailfill = !!loginpayload.email
        const ispassfill = !!loginpayload.password

        if (ismailfill && ispassfill) {
            handlelogin(loginpayload)
        }
    }
    
  return (
    <div className='min-h-screen flex flex-item justify-center items-center'>
        <Card className="w-[440px] h-96">
            <CardHeader className='flex justify-center items-center'>
                <CardTitle>{t('signpage.title')}</CardTitle>
                <CardDescription>{t('signpage.undertitle')}</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <Label className='text-bold text-sm' htmlFor="name">{t('signpage.email')}</Label>
                    <Input 
                        id="name" 
                        placeholder="John@example.com" 
                        value={loginpayload.email}
                        onChange={(e)=>{
                            setLoginpayload({
                                email:e.target.value,
                                password:loginpayload.password
                            })
                        }}
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label className='text-bold text-sm' htmlFor="framework">{t('signpage.pass')}</Label>
                    <Input 
                        id='password'
                        value={loginpayload.password}
                        type="password"
                        onChange={(e)=>{
                            setLoginpayload({
                                email:loginpayload.email,
                                password:e.target.value
                            })
                        }}

                        />
                    </div>
                </div>
                </form>
                <div className='flex justify-center mt-4'>
                    <Button onClick={handlesubmit} className='w-96 bg-[#3D61FF] '>{t('signpage.login')}</Button>
                </div>
            </CardContent>
            <CardFooter className='flex justify-between'>
                <div className='text-sm text-[#3D61FF]'>{t('signpage.da')}</div>
                <div className='text-sm'>
                    <span >{t('signpage.da')}</span>
                    <NavLink to={'/register'}><span className='text-[#3D61FF]' >{t('signpage.sa')}</span></NavLink>
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Login