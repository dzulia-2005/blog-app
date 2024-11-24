import React from 'react'
import Rightbar from '../../components/base/rightbar/rightbar'
import { Button } from '../../components/ui/button'
import { useTranslation } from 'react-i18next'
import image from '../../assets/img.svg'


const Home:React.FC = () => {
  const {t}=useTranslation()
  

  return (
            <div className="mx-auto flex flex-col md:flex-row gap-8">
              <section className="md:w-2/3 space-y-8 flex flex-col">
                  <div className="rounded-xl border shadow">
                      <div className="flex flex-col space-y-1.5 p-6">
                        <div className="mb-4">
                          <img className="rounded-lg object-cover w-full h-[200px]" src={image} alt="" />
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
              </section>
              <Rightbar/>
            </div> 
  )
}

export default Home
