import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Button } from '../../components/ui/button'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const Login:React.FC = () => {
    const {t} = useTranslation()
    
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
                    <Input id="name" placeholder="John@example.com" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label className='text-bold text-sm' htmlFor="framework">{t('signpage.pass')}</Label>
                    <Input id='password'  />
                    </div>
                </div>
                </form>
                <div className='flex justify-center mt-4'>
                    <Button className='w-96 bg-[#3D61FF] '>{t('signpage.login')}</Button>
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