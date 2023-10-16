import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { Link } from 'react-router-dom'

import HomePageImage from '../assets/homePageMainImage.png'

function HomePage() {
  return (
    <HomeLayout>
      <div className='pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]'>
        <div className="w-1/2 space-y-6 ">
          <h1 className="text-5xl font-semibold">
            Find out best {"  "}
            <span className="text-yellow-500">Online Courses</span>
          </h1>
          <p className="text-xl text-neutral-content">
            we have a large library of courses taught bu highly skilled and qualified faculties at a very affordable cost. 
          </p>
          <div className="space-x-6">
            <Link to='/courses'>
              <button className='btn bg-primary text-white'>
                Explore Courses
              </button>
            </Link>
            <Link to='/contact'>
              <button className='btn bg-none border-primary text-white'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={HomePageImage} alt="" />
        </div>
      </div>
    </HomeLayout>
  )
}

export default HomePage