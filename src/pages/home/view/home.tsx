import React from 'react'
import Rightbar from '../../../components/base/rightbar/rightbar'
import BlogCard from '../components/blogcard/blogcard'


const Home:React.FC = () => {
  return (
            <div className="mx-auto flex flex-col md:flex-row gap-8">
              <section className="md:w-2/3 space-y-8 flex flex-col">
                  <BlogCard/>
              </section>
              <Rightbar/>
            </div> 
  )
}

export default Home
