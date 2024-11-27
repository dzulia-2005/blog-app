import React, { useEffect, useState } from 'react';
import { Avatar } from '@radix-ui/react-avatar';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '../../../components/ui/input';
import { fillprofileinfopayload } from '../../../supabase/profile/index.types';
import { fillprofileinfo, getprofileinfo } from '../../../supabase/profile';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { userAtom } from '../../../store/auth';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const [edit, setEdit] = useState(false);
  const [user] = useAtom(userAtom);

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<fillprofileinfopayload>();

  const [profileData, setProfileData] = useState<fillprofileinfopayload>({
    fullname_ka: '',
    fullname_en: '',
    avatar_url: '',
    number: '',
    id: ''
  });

  useEffect(() => {
    if (user?.user?.id) {
      getprofileinfo(user?.user?.id)
        .then((res) => {
          setProfileData(res);
          reset(res);
        })
        .catch((err) => {
          console.error(t('profile.fetch_error'), err);
        });
    }
  }, [user?.user?.id, reset, t]);

  const { mutate: handleFillProfileInfo } = useMutation({
    mutationKey: ['fill-profile-info'],
    mutationFn: fillprofileinfo,
    onSuccess: async () => {
      if (user?.user.id) {
        const updatedProfile = await getprofileinfo(user?.user.id);
        setProfileData(updatedProfile);
        setEdit(false);
      }
    }
  });

  const onSubmit = (data: fillprofileinfopayload) => {
    if (!user?.user?.id) {
      console.error(t('profile.user_missing'));
      return;
    }
    handleFillProfileInfo({ ...data, id: user?.user?.id });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[80%] flex flex-col md:flex-row items-center md:items-start mb-[35%] bg-card rounded-xl shadow-lg p-8">
        <span>
          <div>
            <Avatar className="rounded-full lg:mr-8 mr-0">
              <img
                className="rounded-full"
                src={profileData.avatar_url || 'num'}
                alt="avatar"
              />
            </Avatar>
            <div>
              <p className="text-muted-foreground mb-4">{t('profile.number_label')}: {profileData?.number || 'num'}</p>
              <p className="text-muted-foreground mb-4">
                {t('profile.fullname_label')}: {profileData?.fullname_en || 'fullname'}/{profileData?.fullname_ka || 'fullname'}
              </p>
              <div className="flex justify-center md:justify-start space-x-4 text-sm text-muted-foreground">
                <Button onClick={() => setEdit((prev) => !prev)} className="bg-[#3D61FF] hover:bg-[#3D61FF] mb-4">
                  {t('profile.edit_profile')}
                </Button>
              </div>
            </div>
          </div>

          {edit && (
            <Card className="w-[440px] h-[550px]">
              <CardHeader className="flex justify-center items-center">
                <CardTitle>{t('profile.edit_profile')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label>{t('profile.fullname_ka')}</Label>
                      <Input 
                        {...register('fullname_ka', { 
                          required: t('profile.fullname_ka_required'),
                          minLength: { value: 3, message: t('profile.min_length', { min: 3 }) },
                          maxLength: { value: 50, message: t('profile.max_length', { max: 50 }) }
                        })}
                      />
                      {errors.fullname_ka && <p className="text-red-500 text-sm">{errors.fullname_ka.message}</p>}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label>{t('profile.fullname_en')}</Label>
                      <Input 
                        {...register('fullname_en', { 
                          required: t('profile.fullname_en_required'),
                          minLength: { value: 3, message: t('profile.min_length', { min: 3 }) },
                          maxLength: { value: 50, message: t('profile.max_length', { max: 50 }) }
                        })}
                      />
                      {errors.fullname_en && <p className="text-red-500 text-sm">{errors.fullname_en.message}</p>}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label>{t('profile.number')}</Label>
                      <Input 
                        {...register('number', { 
                          required: t('profile.number_required'), 
                          pattern: { value: /^\d+$/, message: t('profile.invalid_number') }
                        })}
                      />
                      {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label>{t('profile.avatar_url')}</Label>
                      <Input 
                        {...register('avatar_url', { 
                          required: t('profile.avatar_url_required') 
                        })}
                      />
                      {errors.avatar_url && <p className="text-red-500 text-sm">{errors.avatar_url.message}</p>}
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Button type="submit" className="w-96 bg-[#3D61FF]">{t('profile.save')}</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </span>
      </div>
    </div>
  );
};

export default Profile;
