import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React, { useState } from 'react'
import { Button } from '../../components/ui/button'
import { useTranslation } from 'react-i18next'

const Author:React.FC = () => {
    const {t}=useTranslation()
    const [activeTab, setActiveTab] = useState("articles");

  return (
    <div className='max-w-4xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center md:items-start mb-12 bg-card rounded-xl shadow-lg p-8'>
        <Avatar className=' border-4 border-[#3D61FF] rounded-full lg:mr-8 mr-0'>
            <AvatarImage className='rounded-full w-32 ' src="/src/assets/img.svg" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
            <h1 className='text-3xl font-bold mb-2'>Jane Doe</h1>
            <p className='text-muted-foreground mb-4'>Tech enthusiast, software engineer, and avid blogger. Passionate about AI, web development, and the future of technology.</p>
            <div className='flex justify-center md:justify-start space-x-4 mb-4 '>
                <Button className='rounded-full w-10 bg-white border-[#64748B] border-[0.5px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#040611" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter h-4 w-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </Button>
                <Button className='rounded-full w-10 bg-white border-[#64748B] border-[0.5px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#040611" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Button>
                <Button className='rounded-full w-10 bg-white border-[#64748B] border-[0.5px]' >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#040611" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </Button>
                <Button className='rounded-full w-10 bg-white border-[#64748B] border-[0.5px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#040611" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </Button>
            </div>
                <div className='flex justify-center md:justify-start space-x-4 text-sm text-muted-foreground'>
                <span className='flex'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-4 w-4 mr-1"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </span>
                    <span>
                        1234 Followers
                    </span>
                </span>
                <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-4 w-4 mr-1"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <span>1234 Following</span>
                </span>
            </div>
        </div>
        </div>
            <div className="flex items-center justify-center mt-10 "> 
                {/* tab */}
                <div className="flex w-[100%] h-9 bg-gray-300 p-1 rounded-xl dark:bg-[#202127] ">
                    <button
                    className={`hover:bg-[#010917] h-7 flex-1 text-center text-sm font-semibold rounded-xl transition-colors dark:text-[#ffff] ${
                        activeTab === "articles"
                        ? "bg-white text-black"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveTab("articles")}
                    >
                    Articles
                    </button>
                    <button
                        className={`hover:bg-[#010917] h-7 flex-1 text-center text-sm font-semibold rounded-xl transition-colors dark:text-[#ffff] ${
                            activeTab === "about"
                            ? "bg-white text-black"
                            : "text-gray-600 hover:bg-gray-200"
                         }`}
                        onClick={() => setActiveTab("about")}
                    >
                    About
                    </button>
                </div>
            </div>
             {/* content */}
             <div className='mt-8'>
                    {
                        activeTab === "articles" && (
                        <div className="rounded-xl border shadow">
                            <div className="flex flex-col space-y-1.5 p-6">
                            <div className="mb-4">
                                <img className="rounded-lg object-cover w-full h-[200px]" src="/src/assets/img.svg" alt="" />
                            </div>
                            <div className="text-2xl font-bold">{t("homepage.title")}</div>
                            <div className="text-[#555868]">
                                <Button  className="text-[#555868] p-0" variant="link">{t("homepage.name")}</Button>
                                <span> • </span>
                                <span>{t("homepage.month")} {t("homepage.day")}, 2024</span>
                                <span> • </span>
                                <span>{t("homepage.timeline")}</span>
                            </div>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="text-[#555868]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                            </div>
                            <div className="flex items-center p-6 pt-0">
                                <div className="flex space-x-2">
                                <Button className=" text-[#3d435c] w-20 h-6 text-xs" variant="outline">Blockchain</Button>
                                <Button className=" text-[#3d435c] w-20 h-6 text-xs" variant="outline">Technology</Button>
                                <Button className=" text-[#3d435c] w-20 h-6 text-xs" variant="outline">Future</Button>
                                </div>
                            </div>
                        </div>
                        )
                    }

                    {
                        activeTab === "about" && (
                            <div className="rounded-xl border shadow">
                            <div className="flex flex-col space-y-1.5 p-6">
                           
                            <div className="text-8 font-bold">About Jane Doe</div>
                            
                            </div>
                            <div className="p-6 pt-0">
                                <p className="text-[#555868]">Jane Doe is a seasoned software engineer with over a decade of experience in web development. She specializes in JavaScript, React, and Node.js, and has a keen interest in emerging technologies like AI and blockchain. Jane is a frequent speaker at tech conferences and contributes to various open-source projects.</p>
                            </div>
                            <div className="text-8 font-bold p-6 pb-3">Skills</div>
                            <div className="flex items-center p-6 pt-0">
                                <div className="flex space-x-2">
                                <Button className=" text-[#3d61ff] bg-[#e8ecfd] w-20 h-6 text-xs rounded-full" variant="outline">JavaScript</Button>
                                <Button className=" text-[#3d61ff] bg-[#e8ecfd] w-20 h-6 text-xs rounded-full" variant="outline">React</Button>
                                <Button className=" text-[#3d61ff] bg-[#e8ecfd] w-20 h-6 text-xs rounded-full" variant="outline">Node.js</Button>
                                <Button className=" text-[#3d61ff] bg-[#e8ecfd] w-20 h-6 text-xs rounded-full" variant="outline">Python</Button>
                                <Button className=" text-[#3d61ff] bg-[#e8ecfd] w-7 h-6 text-xs rounded-full" variant="outline">AI</Button>
                                <Button className=" text-[#3d61ff] bg-[#e8ecfd] w-24 h-6 text-xs rounded-full" variant="outline">Blockchain</Button>
                                <Button className=" text-[#3d61ff] bg-[#e8ecfd] w-28 h-6 text-xs rounded-full" variant="outline">Web Development</Button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>    
    </div>
  )
}

export default Author