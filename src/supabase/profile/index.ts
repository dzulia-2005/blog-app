import { supabase } from "..";
import { fillprofileinfopayload } from "./index.types";


export const fillprofileinfo = async (payload: fillprofileinfopayload): Promise<any> => {
  const { data, error } = await supabase
    .from("profiles")
    .upsert(payload);  

  if (error) {
    console.error("Error updating profile:", error.message);
    throw new Error(error.message);
  }

  return data;
};


export const getprofileinfo = async (id: string | number): Promise<any> => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single(); 

  if (error) {
    console.error("Error fetching profile:", error.message);
    throw new Error(error.message);
  }

  if (!data) {
    console.error("No profile found for the given ID");
    return null; 
  }

  return data;
};