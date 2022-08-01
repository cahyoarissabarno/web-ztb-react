import { useState } from 'react';
import { Link } from "react-router-dom";
// import Link from 'next/link'
// import Image from "next/image";

export default function Navbar(props) {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <div className="fixed container max-w-none z-20">
      <nav className={`transition-all duration-700 ${(props.bg || toggleNav) ? 'bg-blueLogo' :'bg-transparent'}`}>
          <div className="container px-6 py-4 mx-auto md:grid md:grid-cols-5 md:items-center">
              <div className="flex items-center justify-between">
                  {/* <div className='mx-auto'> */}
                  {/* <div className="md:w-full w-1/2 h-10 object-cover md:mx-auto relative"> */}
                        {/* <Image layout='fill' objectFit='cover' src='/logo-white.png' /> */}
                        <img src='/images/logo-white.png' className="md:w-full w-1/2 h-10 object-cover md:mx-auto relative"/>
                    {/* </div> */}
                  {/* </div> */}
                  
                  <div className="flex md:hidden">
                      <button onClick={()=>setToggleNav(!toggleNav)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gray-100">
                              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                          </svg>
                      </button>
                  </div>
              </div>

              <div className={`items-center md:col-span-4 md:flex ${toggleNav ? 'flex' : 'hidden'}`}>
                <div className="flex flex-col md:flex-row md:mx-6">
                    {props.menu.map((val, i)=>{
                        return(
                            // <a key={i} className="my-3 text-sm font-medium text-white transition-colors duration-200 transform hover:text-blue-500 md:mx-4 md:my-0">{val.title}</a>
                            <Link key={i} className="my-3 text-sm font-medium text-white transition-colors duration-200 transform hover:text-blue-500 md:mx-4 md:my-0" to={`${val.link}`}>{val.title}</Link>
                        )
                    })}
                </div>
              </div>
          </div>
      </nav>
    </div>
  )
}