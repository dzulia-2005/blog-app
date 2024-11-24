import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import { Button } from '../../ui/button'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import image from '../../../assets/img.svg'

const Rightbar:React.FC = () => {
  const {t} = useTranslation()
  
  return (
    <aside className="md:w-1/3 space-y-8">
                <div className="rounded-xl border text-card-foreground shadow">
                  <div className="flex flex-col space-y-1.5 p-6">
                      <div className="font-semibold leading-none tracking-tight">{t("homepage.poptag")}</div>
                  </div>
                  <div className="p-6 pt-0">
                      <div className="flex flex-wrap gap-2">
                        <Button className="bg-[#3D61FF] text-white hover:bg-[#4260e7] w-20 h-6 text-xs" variant="outline">Blockchain</Button>
                        <Button className="bg-[#3D61FF] text-white hover:bg-[#4260e7] w-28 h-6 text-xs" variant="outline">Cryptocurrency</Button>
                        <Button className="bg-[#3D61FF] text-white hover:bg-[#4260e7] w-20 h-6 text-xs" variant="outline">Technology</Button>
                        <Button className="bg-[#3D61FF] text-white hover:bg-[#4260e7] w-24 h-6 text-xs" variant="outline">Programming</Button>
                        <Button className="bg-[#3D61FF] text-white hover:bg-[#4260e7] w-9 h-6 text-xs" variant="outline">AI</Button>
                        <Button className="bg-[#3D61FF] text-white hover:bg-[#4260e7] w-32 h-6 text-xs" variant="outline">Machine Learning</Button>
                      </div>
                  </div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <div className="font-semibold leading-none tracking-tight">{t("homepage.authors")}</div>
                    </div>
                    <div className="p-6 pt-0">
                        <ul className="space-y-4">
                          <NavLink to={'/author'}>
                            <li>
                              <div className="flex items-center">
                                <span >
                                  <Avatar >
                                    <AvatarImage className="rounded-full h-10 w-10" src={image}/>
                                  </Avatar>
                                </span>
                                <div className="ml-4">
                                    <div className="p-0" >Alice Johnson</div>
                                    <p className="text-sm text-muted-foreground">Blockchain Enthusiast</p>
                                </div>
                              </div>
                            </li>
                         </NavLink>
                          <li>
                            <div className="flex items-center">
                              <span >
                                <Avatar >
                                  <AvatarImage className="rounded-full h-10 w-10" src={image}/>
                                </Avatar>
                              </span>
                              <div className="ml-4">
                                   <div className="p-0" >Bob Smith</div>
                                   <p className="text-sm text-muted-foreground">Crypto Analyst </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center">
                              <span >
                                <Avatar >
                                  <AvatarImage className="rounded-full h-10 w-10" src={image}/>
                                </Avatar>
                              </span>
                              <div className="ml-4">
                                   <div className="p-0" >Carol Williams</div>
                                   <p className="text-sm text-muted-foreground">Tech Journalist</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                    </div>
                </div>
              </aside>
  )
}

export default Rightbar
