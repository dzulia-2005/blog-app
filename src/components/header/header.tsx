import React from 'react'
import { Button } from '../ui/button'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode_toogle/mode-toggle'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const Header:React.FC = () => {
  const {t} = useTranslation()
  console.log(t)

  const handleChangeLang = (lang:string) => {
    i18next.changeLanguage(lang)
  }

  return (
    <header className="border-b h-[70px]">
      <div className="mr-auto ml-auto px-4 py-4 flex items-center justify-between">
        <NavLink to={"/"}><div className="text-2xl font-bold">BitBlogs</div></NavLink>
        <nav className="flex space-x-4 text-[#555868] ">
          <NavLink to={"/"} className=""><div className='text-muted-foreground'>{t("homepage.home")}</div></NavLink>
          <div className="  text-muted-foreground">{t("homepage.write")}</div>
          <div className="  text-muted-foreground ">{t("homepage.about")}</div>
        </nav>
        <div className="flex space-x-4 items-center">
          <button className=" h-6 w-6 relative flex items-center" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search text-muted-foreground"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></button>
          <NavLink to={'/login'}><Button variant="secondary" className="h-9 bg-[#3D61FF] text-white hover:bg-[#4260e7]">{t("homepage.signin")}</Button></NavLink>
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <Button className="  h-9 w-9 hover:bg-[#1e293b]" variant="ghost">
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
                    <path
                      d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-32 border h-20 bg-white dark:bg-[#010917] dark:border-gray-700 rounded-md shadow-lg p-2 mt-2 mr-20">
                <button onClick={()=>handleChangeLang("en")} className=" h-8 px-[2rem] py-2 dark:hover:bg-[#1e293b] text-sm">English</button>
                <button onClick={()=>handleChangeLang("ka")} className=" h-8 px-[1.5rem] py-2 dark:hover:bg-[#1e293b] text-sm">ქართული</button>
              </DropdownMenuContent>
            </DropdownMenu>
          <ModeToggle/>   
        </div>
      </div>
    </header>
  )
}

export default Header