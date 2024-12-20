import React, { useState } from "react";
import { Button } from "../../ui/button";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { ModeToggle } from "../../mode_toogle/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { useMutation } from "@tanstack/react-query";
import { logout } from "../../../supabase/auth";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import image from '../../../assets/img.svg';
import { userAtom } from "../../../store/auth";
import { useAtom } from 'jotai';


const Header: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const [user,setUser]=useAtom(userAtom)

  
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangeLang = (lang: string) => {
    const currentPath = location.pathname.split("/").slice(2).join("/");
    i18next.changeLanguage(lang);
    navigate(`/${lang}/${currentPath}`);
  };

  const {mutate:handleLogout} = useMutation({
    mutationKey:['logout'],
    mutationFn:logout,
    onSuccess:()=>{
      setUser(null)
    },
  })


  const [isCommandOpen, setIsCommandOpen] = useState(false);


  return (
    <header className="border-b h-[70px]">
      <div className="mr-auto ml-auto px-4 py-4 flex items-center justify-between">
        <NavLink to={`/${lang}`}>
          <div className="text-2xl font-bold">BitBlogs</div>
        </NavLink>
        <nav className="lg:flex space-x-4 text-[#555868]  hidden">
          <NavLink to={`/${lang}`} className="">
            <div className="text-muted-foreground">{t("homepage.home")}</div>
          </NavLink>
          <NavLink to={`/${lang}/write`}>
            <div className="text-muted-foreground">{t("homepage.write")}</div>
          </NavLink>
          <NavLink to={`/${lang}/about`}>
            <div className="text-muted-foreground">{t("homepage.about")}</div>
          </NavLink>
        </nav>
        <div className="flex space-x-4 items-center"> 
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="h-9 w-9 dark:hover:bg-[#1e293b]"
                variant="ghost"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  
                >
                  <path
                    d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                  <path
                    d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                  <path
                    d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32 border h-20 bg-white dark:bg-[#010917] dark:border-gray-700 rounded-md shadow-lg p-2 mt-2 mr-20">
              <button
                onClick={() => handleChangeLang("en")}
                className="h-8 px-[2rem] py-2 dark:hover:bg-[#1e293b] text-sm"
              >
                English
              </button>
              <button
                onClick={() => handleChangeLang("ka")}
                className="h-8 px-[1.5rem] py-2 dark:hover:bg-[#1e293b] text-sm"
              >
                ქართული
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 <Avatar >
                     <AvatarImage className="rounded-full h-10 w-[2.5rem]" src={image}/>
                 </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-8 w-28 border h-auto bg-white dark:bg-[#010917] dark:border-gray-700 rounded-md shadow-lg p-2 mt-2">
                <DropdownMenuItem>
                  <NavLink to={`/${lang}/profile`} >
                    <button className="w-full text-left">Profile</button>
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button
                    onClick={() => handleLogout()}
                    className="w-full text-left"
                  >
                    Log Out
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
          ):(
            <NavLink to={`/${lang}/login`}>
                <Button
                  variant="secondary"
                  className="h-9 bg-[#3D61FF] text-white hover:bg-[#4260e7]"
                >
                  {t("homepage.signin")}
                </Button>
              </NavLink>
          )}
        </div>
      </div>

      
     {isCommandOpen && (
        <div className="relative">
            <div
            className="w-16 sticky left-[800px] top-16"
            onClick={() => {
              console.log("Backdrop clicked! Closing Command."); 
              setIsCommandOpen(false);
            }}
          >
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
