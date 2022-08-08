import Navbar from '../components/community/Navbar'
import { BsFillCalendarCheckFill, BsClockFill, BsPinMapFill} from 'react-icons/bs'
// import Link from 'next/link'
// import Image from 'next/image'
import Footer from '../components/community/Footer';
import { useEffect, useState, useLayoutEffect } from 'react';

export default function Event() {
  const [navbarBg, setNavbarBg] = useState(false);
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

  const event = [
    { title:'Webinar INTERNET MARKETING REVOLUTION', date:'12 Juli 2022', time:'09.00 - 15.00', place:'Convention Hall', status:'soon', price:'free', image:'bg-blue-newww.webp', desc:'Temukan 3 Rahasia SAKTI Bagaimana Memulai Bisnis di Era NEW NORMAL Tanpa Perlu Modal Besar Bahkan Langsung Bisa Anda Praktekkan Setelah Webinar!' },
    { title:'Webinar INTERNET MARKETING REVOLUTION', date:'12 Juli 2022', time:'09.00 - 15.00', place:'Convention Hall', status:'soon', price:'free', image:'bg-blue-newww.webp', desc:'Temukan 3 Rahasia SAKTI Bagaimana Memulai Bisnis di Era NEW NORMAL Tanpa Perlu Modal Besar Bahkan Langsung Bisa Anda Praktekkan Setelah Webinar!' },
    { title:'Webinar INTERNET MARKETING REVOLUTION', date:'12 Juli 2022', time:'09.00 - 15.00', place:'Online (Via Zoom)', status:'soon', price:'free', image:'bg-blue-newww.webp', desc:'Temukan 3 Rahasia SAKTI Bagaimana Memulai Bisnis di Era NEW NORMAL Tanpa Perlu Modal Besar Bahkan Langsung Bisa Anda Praktekkan Setelah Webinar!' },
    { title:'Webinar INTERNET MARKETING REVOLUTION', date:'12 Juli 2022', time:'09.00 - 15.00', place:'Online (Via Zoom)', status:'done', price:'free', image:'bg-blue-newww.webp', desc:'Temukan 3 Rahasia SAKTI Bagaimana Memulai Bisnis di Era NEW NORMAL Tanpa Perlu Modal Besar Bahkan Langsung Bisa Anda Praktekkan Setelah Webinar!' },
    { title:'Webinar INTERNET MARKETING REVOLUTION', date:'12 Juli 2022', time:'09.00 - 15.00', place:'Online (Via Zoom)', status:'done', price:'free', image:'bg-blue-newww.webp', desc:'Temukan 3 Rahasia SAKTI Bagaimana Memulai Bisnis di Era NEW NORMAL Tanpa Perlu Modal Besar Bahkan Langsung Bisa Anda Praktekkan Setelah Webinar!' },
    { title:'Webinar INTERNET MARKETING REVOLUTION', date:'12 Juli 2022', time:'09.00 - 15.00', place:'Convention Hall', status:'done', price:'free', image:'bg-blue-newww.webp', desc:'Temukan 3 Rahasia SAKTI Bagaimana Memulai Bisnis di Era NEW NORMAL Tanpa Perlu Modal Besar Bahkan Langsung Bisa Anda Praktekkan Setelah Webinar!' }
  ]

  const onNavScroll = () =>{
    if (window.scrollY >= 90) {
      setNavbarBg(true)
    } else {
      setNavbarBg(false)
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

        {/* Section 1 */}
        <div style={{ backgroundImage: "url('/images/bg-blue-newww.webp')"}} className="container bg-cover bg-right-bottom max-w-none md:px-14 px-6 flex flex-col py-4 mx-auto space-y-6 lg:h-[42rem] py-16 md:flex-row md:items-center bg-blueLogo">
            <div className="flex flex-col mt-10 md:items-center w-full md:flex-row lg:w-1/2 w-3/4">
                <div className="max-w-lg md:mx-14 md:order-2">
                <h1 className="text-xl font-bold tracking-wide text-gray-100 lg:text-2xl uppercase">
                Kembangkan bisnis anda dengan mengikuti
                </h1>
                <h1 className="text-3xl font-bold tracking-wide my-4 text-gray-100 lg:text-7xl">
                EVENT
                </h1>
            </div>
            </div>

            <div className="flex items-center mt-10 justify-center w-full h-full lg:w-1/2 md:flex hidden">
                {/* <div className='object-cover object-right w-full h-full max-w-2xl'> */}
                    <img className="rounded-full p-10 object-cover aspect-square" src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"/>
                {/* </div> */}
            </div>
        </div>
        
        {/* Section 2 */}
        <div className='container my-14 mx-auto'>
            <div className="flex my-8 w-3/4 sm:flex-row sm:justify-center mx-auto">
                <input id="email" type="text" className="px-4 py-2 w-3/4 text-gray-700 bg-white shadow-lg rounded-md sm:mx-2" placeholder="Search ..."/>
                
                <button className="w-1/4 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize bg-blue-700 shadow-xl rounded-md sm:mx-2">
                    Cari
                </button>
            </div>
            <div className='flex flex-wrap'>
            { event.map((item,i)=>{
                return (
                    <div key={i} className="flex max-w-xl m-7 overflow-hidden bg-white rounded-lg shadow-lg">
                        <div className="w-2/5 bg-cover" style={{ backgroundImage: `url('/images/${item.image}')`}}></div>
                        <div className="w-3/5 p-4 md:p-4 text-left">
                            <h1 className="sm:text-2xl text-lg tracking-tighter leading-snug font-bold text-gray-800">{item.title}</h1>
                            <div className="my-5 item-center sm:text-sm text-xs text-gray-600">
                                <p><span className='mr-2 inline-flex'><BsFillCalendarCheckFill/></span>{item.date}</p>
                                <p><span className='mr-2'><BsClockFill className='inline'/></span>{item.time}</p>
                                <p><span className='mr-2'><BsPinMapFill className='inline'/></span>{item.place}</p>
                            </div>
                            <p className="mt-2 sm:text-sm text-xs text-gray-600">{item.desc}</p>

                            <div className="flex justify-between mt-5 item-center">
                                <h1 className="text-lg font-bold text-gray-700 md:text-xl uppercase">{item.price}</h1>
                                <button className={`${item.status == 'soon' ? 'block' : 'hidden'} px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700`}>Daftar</button>
                                <button className={`${item.status == 'done' ? 'block' : 'hidden'} px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-300`}>Selesai</button>
                            </div>
                        </div>
                    </div>
                )
            }) }
            </div>
        </div>

        <Footer/>
    </div>
  )
}