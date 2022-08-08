import Navbar from '../components/community/Navbar'
import { BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
// // import Link from 'next/link'
// import Image from 'next/image'
import Footer from '../components/community/Footer';
import { useEffect, useState, useLayoutEffect } from 'react';

export default function About() {
  const [navbarBg, setNavbarBg] = useState(true);
  const [toggleModalReseller, setToggleModalReseller] = useState(false);
  const [toggleModalOwner, setToggleModalOwner] = useState(false);
  const menu = [
    {title: 'Home', link: '/'},
    {title: 'Shop', link: '/shop'},
    {title: 'Owner', link: '/owner'},
    {title: 'Reseller', link: '/reseller'},
    {title: 'Event', link: '/event'},
    {title: 'About', link: '/about'},
  ]

  const onNavScroll = () =>{
    if (window.scrollY >= 90) {
      setNavbarBg(true)
    } else {
      setNavbarBg(true)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', onNavScroll);
  },[])



  return (
    <div className={`overflow-hidden bg-gray-50`}>
        <div>
          <Navbar menu={menu} bg={navbarBg} />
        </div>
        
        <section className="bg-gradient-to-b from-blue-200 to-gray-200 max-w-none md:px-14 px-6 flex flex-col py-4 mx-auto space-y-6 lg:h-[42rem] py-16 md:flex-row md:items-center">
            <div className="container flex flex-col items-center md:px-4 px-1 py-12 mt-16 mx-auto text-center">
                <div className="w-full md:w-1/2 w-full h-20 object-cover mx-auto my-6 relative">
                    {/* <Image layout='fill' objectFit='cover' src='/logo-blue.png' /> */}
                    <img src='/images/logo-blue.png' />
                </div>

                <p className="block max-w-2xl mt-4 md:text-xl text-lg text-gray-900">
                    Adalah Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto recusandae tenetur iste quaerat voluptatibus quibusdam nam repudiandae
                    um dolor sit amet consectetur, adipisicing elit. Iusto recusandae tenetur iste quaerat voluptatibus quibusdam nam repudiandae
                </p>
               
                <div className="pt-8 flex max-w-xs mx-auto items-center justify-between text-gray-600">
                    {/* <a href='#'><BsWhatsapp className='w-8 h-8 m-6'/></a> */}
                    <a href='#'><BsInstagram className='w-8 h-8 m-6'/></a>
                    <a href='#'><BsFacebook className='w-8 h-8 m-6'/> </a>
                    <a href='#'><GrMail className='w-8 h-8 m-6'/></a>
                </div>
            </div>
        </section>

        
        <section className="bg-gradient-to-b from-gray-200 to-blue-50 pb-20">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 capitalize lg:text-5xl">Our <span className="text-blueLogo">Executive Team</span></h1>
                
                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
                
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2 text-left">
                    <div className="px-12 py-8 transition-colors duration-200 transform border cursor-pointer shadow-lg rounded-xl hover:border-transparent group hover:bg-blueLogo">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <div className="flex-shrink-0 object-cover w-24 h-24 sm:mx-4 relative">
                                <img className='rounded-full' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                            </div>
                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl group-hover:text-white">arthur melo</h1>
                                
                                <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">CEO</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize group-hover:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.</p>
                        
                    </div>

                    <div className="px-12 py-8 transition-colors duration-200 transform border cursor-pointer shadow-lg rounded-xl hover:border-transparent group hover:bg-blueLogo">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <div className="flex-shrink-0 object-cover w-24 h-24 sm:mx-4 relative">
                                <img className='rounded-full' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                            </div>
                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl group-hover:text-white">Amelia. Anderson</h1>
                                
                                <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">CTO</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize group-hover:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.</p>

                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </div>
  )
}