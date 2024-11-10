
"use client"
import Image from 'next/image'
import React from 'react'
import image from "/../public/Images/pari.jpg"
import Typewriter from 'typewriter-effect';
import Link from 'next/link';







const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />

        <Typewriter
         options={{
          strings: ["Web Developer" ,"UI/UX Designer"],
         autoStart: true,
        loop: true,
        }}
         />
      </h1>
      <div className='w-[100px] h-[2px] bg-blue-800'></div>
      <p className="mb-8 leading-relaxed">
       I have a solid foundation in web development,specializing in HTML,CSS,and JAVA scripts.
       My exprrience extends to using frame work like React and next.js.I'm also proficent in Tailwind CSS 
       for design. with a passion learning, I stay updated on the latest technologies to enhance my skills. 
      </p>
      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        alt="sadaf image"
        width={500}
        height={500}
        src="/pari.jpg"
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
