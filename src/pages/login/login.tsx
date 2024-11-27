import React, { useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Button } from '../../components/ui/button'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@tanstack/react-query'
import { login } from '../../supabase/auth'
import { useAtom } from 'jotai'
import { userAtom } from '../../store/auth'
import { useForm } from 'react-hook-form'

type FormValues = {
    email: string
    password: string
};

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [, setUser] = useAtom(userAtom);
    const { lang } = useParams<{ lang: string }>();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    
    useEffect(() => {
        if (!lang || !["en", "ka"].includes(lang)) {
            navigate(`/en/login`); 
        }
    }, [lang, navigate]);

    const { mutate: handleLogin } = useMutation({
        mutationKey: ["login"],
        mutationFn: login,
        onSuccess: (res) => {
            setUser(res.data.user);
            navigate(`/${lang}`);
        },
    });

    const onSubmit = (data: FormValues) => {
        handleLogin(data);
    };

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Card className="w-[440px] h-auto">
                <CardHeader className='flex flex-col items-center'>
                    <CardTitle>{t('signpage.title')}</CardTitle>
                    <CardDescription>{t('signpage.undertitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label className='text-bold text-sm' htmlFor="email">{t('signpage.email')}</Label>
                                <Input
                                    id="email"
                                    placeholder="John@example.com"
                                    {...register("email", {
                                        required: t('signpage.required') as string,
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: t('signpage.emailvalida')
                                        },
                                    })}
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label className='text-bold text-sm' htmlFor="password">{t('signpage.pass')}</Label>
                                <Input
                                    id='password'
                                    type="password"
                                    {...register("password", {
                                        required: t('signpage.required') as string,
                                        minLength: {
                                            value: 6,
                                            message: t('signpage.minLength', { count: 6 })
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: t('signpage.maxLength', { count: 20 })
                                        }
                                    })}
                                />
                                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                            </div>
                        </div>
                        <div className='flex justify-center mt-4'>
                            <Button type="submit" className='w-96 bg-[#3D61FF]'>{t('signpage.login')}</Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className='flex justify-between'>
                    <div className='text-sm text-[#3D61FF]'>{t('signpage.da')}</div>
                    <div className='text-sm'>
                        <span>{t('signpage.da')}</span>
                        <NavLink to={`/${lang}/register`}><span className='text-[#3D61FF]'>{t('signpage.sa')}</span></NavLink>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;
