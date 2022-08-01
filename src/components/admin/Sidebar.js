import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {
    const [toggleNav, setToggleNav] = useState(false)
      
    return (
        <>
            <button onClick={()=>setToggleNav(!toggleNav)} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="lg:hidden fixed inline-block p-3 bg-blueLogo text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blueLogo active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5" id="btn-back-to-top">
                Menu
            </button>
            <div className={`lg:flex lg:static fixed ${toggleNav ? 'flex' : 'hidden'} flex-col w-64 h-screen py-8 border-r bg-blueLogo border-gray-600 z-10`}>
                <h2 className="text-3xl font-semibold text-center text-white">Brand</h2>

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
                    
                    <h4 className="mx-2 mt-2 font-medium text-gray-200 hover:underline">John Doe</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-400 hover:underline">john@example.com</p>
                </div>
                
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        {props.menu.map((val, i)=>{
                            return(
                                <Link key={i} to={`${val.link}`}>
                                    <a onClick={()=>setToggleNav(!toggleNav)} className="flex items-center px-4 py-2 text-gray-700 bg-blueLogo text-gray-200 hover:bg-blue-900" href="#">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        <span className="mx-4 font-medium">{val.title}</span>
                                    </a>
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </>
    )
  }