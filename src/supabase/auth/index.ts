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

export const login = async ({ email, password }: { email: string, password: string }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) throw error;
    return data;
};