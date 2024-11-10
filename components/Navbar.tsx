import Link from 'next/link'
import React from 'react'
import { MdFileDownload } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      
      <span className=" bg-gray-100 hover:orange-600 ml-3 text-xl  ">PORTFOLIO</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-orange-600">Home</Link>
      <Link href={"#skills"} className="mr-5 hover:text-orange-600">Skills</Link>
      <Link href={"#"} className="mr-5 hover:text-orange-600">Project</Link>
      <Link href={"#contact"} className="mr-5 hover:text-orange-600">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">
        <a href="/Images/resume"/>
      My Resume
      <MdFileDownload  className='text-lg ml-2'/>
    </button>
  </div>
</header>

    </div>
  )
}

export default Navbar
