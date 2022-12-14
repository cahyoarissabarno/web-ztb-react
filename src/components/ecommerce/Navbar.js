import { useState } from 'react'
import { Link } from "react-router-dom";

export default function NavbarEcommerce(props) {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <div className="fixed container max-w-none z-20">
      <nav className="transition-all duration-700 shadow bg-blueLogo">
          <div className="container px-6 sm:py-3 py-1 mx-auto md:flex md:justify-between md:items-center">
              <div className="flex items-center justify-between">
                  
                <img src='/images/logo-white.png' className="md:w-full w-1/2 h-10 object-cover md:mx-auto relative"/>
                  
                  
                  <div className="flex md:hidden">
                      <button onClick={()=>setToggleNav(!toggleNav)} type="button" className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-label="toggle menu">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                          </svg>
                      </button>
                  </div>
              </div>

              <div className={`items-center text-left md:flex ${toggleNav ? 'flex' : 'hidden'}`}>
                <div className="flex flex-col md:flex-row md:mx-6">
                    {props.menu.map((val, i)=>{
                        return(
                            <Link key={i} to={`${val.link}`} className="my-3 md:my-0 text-sm font-medium transition-colors duration-200 transform text-gray-200 hover:text-blue-400 md:mx-4">
                                {val.title}
                            </Link>
                        )
                    })}
                    <Link to='/cart' className="flex justify-center md:block my-3 md:my-1">
                        <a className="relative transition-colors duration-200 transform text-gray-200 hover:text-gray-300" href="#">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                        </a>
                    </Link>
                </div>
              </div>
          </div>
      </nav>
    </div>
  )
}