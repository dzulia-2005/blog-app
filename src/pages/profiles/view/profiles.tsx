import { Avatar, } from '@radix-ui/react-avatar';
import { Button } from '../../../components/ui/button';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '../../../components/ui/input';
import { fillprofileinfopayload } from '../../../supabase/profile/index.types';
import { fillprofileinfo, getprofileinfo } from '../../../supabase/profile';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { userAtom } from '../../../store/auth';



const Profile:React.FC = () => {
    const [edit,setEdit]=useState(false)
    const [, setIsLoading] = useState(false);
    const [, setIsError] = useState(false);
    
    const handleclick = () => {
        setEdit(prevedit=>!prevedit)
    }
    
    const[user,]=useAtom(userAtom)

    const [profileData, setProfileData] = useState<fillprofileinfopayload>({
        fullname_ka: "",
        fullname_en: "",
        avatar_url: "",
        number: "",
        id:''
      });

    const [profilePayload, setProfilePayload] = useState<fillprofileinfopayload>({
        fullname_ka:"",
        fullname_en:"",
        avatar_url:"",
        number:"",
        id:''
      });

      useEffect(() => {
        if (user?.user?.id) {
          setIsLoading(true);
          getprofileinfo(user?.user?.id)
            .then((res) => {
              setProfileData(res);
              setProfilePayload(res);
              setIsLoading(false);
            })
            .catch((err) => {
              console.error("Error fetching profile data:", err);
              setIsError(true);
              setIsLoading(false);
            });
        }
      }, [user?.user?.id]);

      const { mutate: handleFillProfileInfo } = useMutation({
        mutationKey: ["fill-profile-info"],
        mutationFn: fillprofileinfo,
        onSuccess: async () => {
          if (user?.user.id) {
            const updatedProfile = await getprofileinfo(user?.user.id);
            setProfileData({ ...updatedProfile });
            setEdit(false);
          }
        },
      });
    
    
      const handleSubmit = () => {
        if (!user?.user?.id) {
            console.error("user is missing")
            return
        }
        handleFillProfileInfo({ ...profilePayload, id: user?.user?.id });
      };

      
  return (
    <div  className='min-h-screen flex flex-item justify-center items-center '>
       <div className='w-[80%] flex flex-col md:flex-row items-center md:items-start mb-[35%] bg-card rounded-xl shadow-lg p-8'>
        <span >
            <div>
                <Avatar className='rounded-full lg:mr-8 mr-0'>
                <img
                    className='rounded-full'
                    src="https://api.dicebear.com/9.x/avataaars/svg"
                    alt="avatar"
                    />
                </Avatar>
                <div>
                <p className="text-muted-foreground mb-4">number: {profileData?.number || "num"}</p>
                <p className="text-muted-foreground mb-4">fullname :  {profileData?.fullname_en || "fullname"}/{profileData?.fullname_ka || "fullname"}</p>
                    <div className='flex justify-center md:justify-start space-x-4 text-sm text-muted-foreground'>
                        <Button onClick={handleclick} className='bg-[#3D61FF] hover:bg-[#3D61FF] mb-4'>Edit Profile</Button>
                    </div>
                </div>
            </div>

            {
                edit && (
                 <Card className="w-[440px] h-[550px]">
                    <CardHeader className='flex justify-center items-center'>
                        <CardTitle></CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                        <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                                <Label className='text-bold text-sm' >Fullname (KA)</Label>
                                <Input 
                                    id="name"  
                                    value={profilePayload.fullname_ka || ''}
                                            onChange={(e) => 
                                                setProfilePayload({
                                                    ...profilePayload,
                                                    fullname_ka:e.target.value 
                                                })
                                            } 
                                    />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label className='text-bold text-sm'>Fullname (EN)</Label>
                                <Input 
                                    id="name"  
                                    value={profilePayload.fullname_en || ''}
                                    onChange={(e)=>{
                                        setProfilePayload({
                                            ...profilePayload,
                                            fullname_en:e.target.value,
                                    })
                                }}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label 
                                    className='text-bold text-sm'>Number </Label>
                                <Input 
                                    id="name" 
                                    value={profilePayload.number || ''}
                                    onChange={(e)=>{
                                        setProfilePayload({
                                           ...profilePayload,
                                            number:e.target.value
                                        })
                                    }}
                                    />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label className='text-bold text-sm'> avatar_url</Label>
                                <Input 
                                    id="name" 
                                    value={profilePayload.avatar_url || ''}
                                    onChange={(e)=>{
                                        setProfilePayload({
                                            ...profilePayload,
                                            avatar_url:e.target.value
                                        })
                                    }}
                                    />
                            </div>
                            
                        </div>
                        </form>
                        <div className='flex justify-center mt-4'>
                            <Button onClick={handleSubmit} className='w-96 bg-[#3D61FF]'>edit</Button>
                        </div>
                    </CardContent>
                </Card>
              )
            }
            
        </span>
       </div>
    </div>
    
  )
}

export default Profile