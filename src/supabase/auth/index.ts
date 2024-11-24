import { supabase } from "..";

export const register = async ({ email, password,username }: { email: string; password: string ,username:string}) => {
    const { data, error } = await supabase.auth.signUp({ email, password,options:{
        data:{
            username
        }
    } });
    if (error) throw error;
    return data;
};

export const login =  ({
     email, 
     password 
    }: {
        email: string, 
        password: string 
    }) => {
     return supabase.auth.signInWithPassword({email, password}).then((res)=>{
        if (res?.error && res?.error?.status && (res?.error?.status < 200 || res?.error?.status>=300)) {
            throw new Error('auth')
        }

        return res;
    });
   
};

export const logout = () => {
    return supabase.auth.signOut();
}