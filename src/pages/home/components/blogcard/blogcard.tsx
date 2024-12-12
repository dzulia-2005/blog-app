import React, { useEffect, useState } from 'react';
import { Button } from '../../../../components/ui/button';
import { supabase } from '../../../../supabase';

// Define the type for blog items
type BlogItem = {
    created_at: string;
    description_en: string;
    description_ka: string;
    id: number;
    img_url: string;
    title: string;
    user_id: string;
};

const BlogCard: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]); // State for storing blog data
 
   useEffect(() => {
    supabase
    .from("blogs")
    .select("*")
    .throwOnError()
    .then((res) => {
      const blogsList = res.data as unknown as BlogItem[];
      setBlogs(blogsList);
      console.log("resdata :" , res)
    });
    
  }, []); 

  return (
    <>
      {blogs.map((blog) => { 
        const blogimageurl = `${import.meta.env.VITE_SUPABASE_BLOG_IMG_URL}/${blog?.img_url}`
        return (
          <div key={blog.id} className="rounded-xl border shadow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="mb-4">
                <img className="rounded-lg object-cover w-full h-[200px]" src={blogimageurl} alt="" />
              </div>
              <div className="text-2xl font-bold">{blog.title}</div>
              <div className="text-[#555868]">
                <span>•{blog?.created_at} •</span>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-[#555868]">{blog?.description_en}</p>
              <p className="text-[#555868]">{blog?.description_ka}</p>
            </div>
            <div className="flex items-center p-6 pt-0">
              <div className="flex space-x-2">
                <Button className="text-[#3d435c] w-20 h-6 text-xs" variant="outline">Blockchain</Button>
                <Button className="text-[#3d435c] w-20 h-6 text-xs" variant="outline">Technology</Button>
                <Button className="text-[#3d435c] w-20 h-6 text-xs" variant="outline">Future</Button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default BlogCard;