import React, { useCallback, useEffect, useState } from 'react';
import { supabase } from '../../../../supabase';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../../../../components/ui/input';
import { useSearchParams } from 'react-router-dom';
import underscore from "underscore";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import qs from 'qs';

dayjs.extend(relativeTime); 

type BlogItem = {
  created_at: string;
  description_en: string;
  description_ka: string;
  id: number;
  img_url: string;
  title: string;
  user_id: string;
};

type BlogFilterFormValues = {
  searchText: string;
};

const BlogCard: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const parsedQueryParams = qs.parse(searchParams.toString());

  const { control, watch } = useForm<BlogFilterFormValues>({
    defaultValues: parsedQueryParams,
  });

  const watchedSearchText = watch("searchText");

  const fetchBlogs = useCallback(
    underscore.debounce((searchText: string) => {
      supabase
        .from("blogs")
        .select("*")
        .ilike("title", `%${searchText}%`)
        .throwOnError()
        .then((res) => {
          const blogsList = res.data as BlogItem[];
          setBlogs(blogsList);
        });
    }, 500),
    []
  );

  useEffect(() => {
    if (watchedSearchText !== undefined) {
     
      setSearchParams(
        qs.stringify({ searchText: watchedSearchText }, {
          skipNulls: true,
          filter: (_, value) => value || undefined,
        })
      );

     
      if (watchedSearchText.length > 2) {
        fetchBlogs(watchedSearchText);
      } else {
        setBlogs([]); 
      }
    }
  }, [watchedSearchText, fetchBlogs, setSearchParams]);

  useEffect(() => {
    const fetchInitialBlogs = async () => {
      const parsedSearchParams = qs.parse(searchParams.toString());
      const searchText = parsedSearchParams?.searchText || "";
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .like("title", `%${searchText}%`);

      if (error) {
        console.error("Error fetching blogs:", error);
      } else {
        setBlogs(data as BlogItem[]);
      }
    };

    fetchInitialBlogs();
  }, [searchParams]);

  return (
    <>
      <form className="my-5 flex">
        <Controller
          control={control}
          name="searchText"
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              placeholder="Search BlogCard"
            />
          )}
        />
      </form>
      {blogs.map((blog) => {
        const blogImageUrl = `${import.meta.env.VITE_SUPABASE_BLOG_IMG_URL}/${blog.img_url}`;
        const blogDate = dayjs(blog.created_at); // თარიღის მიღება
        const formattedDate =
          dayjs().diff(blogDate, "day") < 1
            ? blogDate.fromNow() // თუ ერთ დღეზე ნაკლებია, აჩვენებს "n საათის წინ"
            : `${blogDate.format("HH:mm")} - ${blogDate.format("DD/MM/YYYY")}`; // სხვა შემთხვევაში აჩვენებს "21:56 - 13/12/2024"

        return (
          <section key={blog.id}>
            <div className="rounded-xl border shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mb-4">
                  <img
                    className="rounded-lg object-cover w-full h-[200px]"
                    src={blogImageUrl}
                    alt={blog.title}
                  />
                </div>
                <div className="text-2xl font-bold">{blog.title}</div>
                <div className="text-[#555868]">
                  <span>• {formattedDate} •</span>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-[#555868]">{blog.description_en}</p>
                <p className="text-[#555868]">{blog.description_ka}</p>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default BlogCard;
