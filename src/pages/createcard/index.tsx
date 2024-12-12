import React from "react";
import { Button } from "../../components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { supabase } from "../../supabase";
import { useAtom } from "jotai";
import { userAtom } from "../../store/auth";
import { useNavigate } from "react-router-dom";

type bloglistcreatevalues = {
  description_en: string;
  description_ka: string;
  img_url:  null | File; 
  title: string; 
};


  const bloglistcreateformvalues = {
    description_en: "",
    description_ka: "",
    img_url: null ,
    title: "", 
  };

  const AddCard: React.FC = () => {

    const[user,]=useAtom(userAtom)
    const navigate = useNavigate();

    const {register,control,handleSubmit,formState: { errors },} = useForm<bloglistcreatevalues>({ 
      defaultValues: bloglistcreateformvalues
    
    });
  
    const onSubmit = (formValues: bloglistcreatevalues) => {

      if (formValues?.img_url) {
        supabase.storage
          .from("blog_images")
          .upload(formValues?.img_url?.name, formValues.img_url)
          .then((res)=>{
            navigate("/home")
            return supabase.from("blogs").insert({
              title:formValues.title,
              description_en:formValues.description_en,
              description_ka:formValues.description_ka,
              img_url:res.data?.fullPath,
              user_id:user?.user?.id
            })
          })
      }
    };

  
    return (
      <div className="flex items-center justify-center">
        <div className="w-96 mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="text-bold text-sm">Title</Label>
                <Input
                  type="text"
                  placeholder="title"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && <span className="text-red-500">{errors.title.message}</span>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-bold text-sm">Description (KA)</Label>
                <Input
                  type="text"
                  placeholder="ქართულად"
                  {...register("description_ka", { required: "Description in KA is required" })}
                />
                {errors.description_ka && (
                  <span className="text-red-500">{errors.description_ka.message}</span>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-bold text-sm">Description (EN)</Label>
                <Input
                  type="text"
                  placeholder="english"
                  {...register("description_en", { required: "Description in EN is required" })}
                />
                {errors.description_en && (
                  <span className="text-red-500">{errors.description_en.message}</span>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-bold text-sm">Image</Label>
                <Controller
                  name="img_url"
                  control={control}
                  rules={{ required: "Image is required" }}
                  render={({ field: { onChange } }) => (
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        onChange(file);
                      }}
                    />
                  )}
                />
                                  
                
                {errors.img_url && <span className="text-red-500">{errors.img_url.message}</span>}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Button type="submit" className="w-96 bg-[#3D61FF]">
                Create Card
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddCard;
