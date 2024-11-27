import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '@radix-ui/react-label';
import { NavLink, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

type FormvValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormvValues>();
  const password = watch("password");
  const { lang } = useParams<{ lang: string }>();

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: FormvValues) => {
      return new Promise((resolve) => {
        console.log('Registered:', data);
        resolve(data); 
      });
    },
  });
  const onsubmit = (data: FormvValues) => {
    handleRegister(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className="w-[440px] h-[550px]">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle>{t('signup.title')}</CardTitle>
          <CardDescription>{t('signup.undertitle')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="grid w-full items-center gap-4">
              {/* Name Field */}
              <div className="flex flex-col space-y-1.5">
                <Label className="text-bold text-sm" htmlFor="name">{t('signup.Name')}</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register('name', {
                    required: t('signup.required') as string,
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: t('signup.namevalida') as string,
                    },
                  })}
                />
                {errors.name && <div className="text-red-500 text-sm">{errors.name.message}</div>}
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-1.5">
                <Label className="text-bold text-sm" htmlFor="email">{t('signup.Email')}</Label>
                <Input
                  id="email"
                  placeholder="John@example.com"
                  {...register('email', {
                    required: t('signup.required') as string,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: t('signup.emailvalidate') as string,
                    },
                  })}
                />
                {errors.email && <div className="text-red-500 text-sm">{errors.email.message}</div>}
              </div>

              {/* Password Field */}
              <div className="flex flex-col space-y-1.5">
                <Label className="text-bold text-sm" htmlFor="password">{t('signup.Password')}</Label>
                <Input
                  id="password"
                  type="password"
                  {...register('password', {
                    required: t('signup.required') as string,
                    minLength: {
                      value: 6,
                      message: t('signup.minLength'),
                    },
                    maxLength: {
                      value: 20,
                      message: t('signup.maxLength'),
                    },
                  })}
                />
                {errors.password && <div className="text-red-500 text-sm">{errors.password.message}</div>}
              </div>

              {/* Confirm Password Field */}
              <div className="flex flex-col space-y-1.5">
                <Label className="text-bold text-sm" htmlFor="confirmPassword">{t('signup.CP')}</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register('confirmPassword', {
                    required: t('signup.required') as string,
                    validate: (value) => value === password || t('signup.confirmPassword') as string,
                  })}
                />
                {errors.confirmPassword && <div className="text-red-500 text-sm">{errors.confirmPassword.message}</div>}
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <Button type="submit" className="w-96 bg-[#3D61FF]">{t('signup.signup')}</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm items-center">
          <span>{t('signup.AC')}</span>
          <NavLink to={`/${lang}/login`}>
            <span className="text-[#3D61FF]">{t('signup.LI')}</span>
          </NavLink>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
