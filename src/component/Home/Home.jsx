import React from 'react'
import './Home.css'

export default function Home() {



  return <>

    <section className='home'>

      <div className=' flex flex-col items-center justify-center '>
        <h1 className='font-bold text-6xl text-white'>Hello</h1>
        <h2 className=' text-6xl text-white mt-7 '>I AM </h2>

        <div className="icons ">

          <ul className='flex space-x-7 pt-20'>
            <li className='w-9 bg-gray-900 text-white hover:bg-black ease-in duration-150 rounded-full flex items-center justify-center  h-9'>
              <i className="fa-brands fa-facebook-f"></i>
            </li>
            <li className='w-9 bg-gray-900 text-white hover:bg-black ease-in duration-150 rounded-full flex items-center justify-center  h-9'>
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li className='w-9 bg-gray-900 text-white hover:bg-black ease-in duration-150 rounded-full flex items-center justify-center  h-9'>
              <i className="fa-brands fa-linkedin"></i>
            </li>
            <li className='w-9 bg-gray-900 text-white hover:bg-black ease-in duration-150 rounded-full flex items-center justify-center  h-9'>
              <i className="fa-brands fa-youtube"></i>
            </li>
            <li className='w-9 bg-gray-900 text-white hover:bg-black ease-in duration-150 rounded-full flex items-center justify-center  h-9'>
              <i className="fa-brands fa-github "></i>
            </li>

          </ul>

        </div>

      </div>

    </section>

  </>

}
