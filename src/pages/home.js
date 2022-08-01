import Navbar from '../components/community/Navbar'
import {BsPatchCheck, BsCashCoin, BsCoin, BsHandThumbsUp,
  BsClockHistory, BsInboxes, BsGlobe2, BsMenuButtonWideFill,
  BsFillPersonFill, BsFillDiagram2Fill} from 'react-icons/bs'
import {Link} from 'react-router-dom';
import Footer from '../components/community/Footer';
import { useEffect, useState, useLayoutEffect } from 'react';
import RegisterReseller from '../components/modal/RegisterReseller';
import RegisterOwner from '../components/modal/RegisterOwner';

export default function Home() {
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

  const section2 = [
    { icon: <BsPatchCheck className='w-full px-5 py-4 h-24 fill-blueLogo'/> , title: "Legal", desc: "Aman dan terpercaya" },
    { icon: <BsCoin className='w-full px-5 py-4 h-24 fill-blueLogo'/>, title: "Pendapatan", desc: "Cepat menghasilkan (harian / mingguan) dan jangka panjang" },
    { icon: <BsCashCoin className='w-full px-5 py-4 h-24 fill-blueLogo'/>, title: "Modal", desc: "Modal kecil dan resiko kecil" },
    { icon: <BsHandThumbsUp className='w-full px-5 py-4 h-24 fill-blueLogo'/>, title: "Bebas", desc: "Tidak memerlukan tempat dan karyawan" },
    { icon: <BsClockHistory className='w-full px-5 py-4 h-24 fill-blueLogo'/>, title: "Waktu", desc: "Bisa dijalankan oleh siapa saja dan di mana saja" },
    { icon: <BsInboxes className='w-full px-5 py-4 h-24 fill-blueLogo'/>, title: "Produk", desc: "Produknya dibutuhkan, laku keras, dan repeat order tinggi" },
    { icon: <BsGlobe2 className='w-full px-5 py-4 h-24 fill-blueLogo'/>, title: "Worldwide", desc: "Jangkauan pemasaran sangat luas tanpa batas kota dan negara" },
    { icon: <BsMenuButtonWideFill className='w-full px-5 py-4 h-24 fill-blueLogo'/>, title: "Platform", desc: "Memiliki platform digital yang lengkap, terpadu dan user friendly" }
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

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className={`overflow-hidden`}>
        <div>
          <Navbar menu={menu} bg={navbarBg} />
        </div>

        {/* Section 1 */}
        <div style={{ backgroundImage: "url('/images/bg-blue-newww.webp')"}} className="container max-w-none bg-cover sm:px-14 px-4 flex flex-col mx-auto space-y-6 py-20 md:flex-row md:items-center">
          <div className="flex items-center sm:mt-10 justify-center w-full h-full md:w-1/2">
            {/* <div className='object-cover object-right w-10/12 h-10/12 max-w-2xl static z-0'> */}
              <img src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"
                className='rounded-xl object-cover object-right'/>
              {/* <Image layout='intrinsic' width={550} height={550} objectFit='cover' className="rounded-full z-10" 
                src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"/> */}
            {/* </div> */}
          </div>
          <div className="flex flex-col sm:mt-10 sm:py-9 py-4 sm:px-0 px-4 md:items-center md:flex-row md:w-3/5 lg:mx-6 mx-2 bg-gray-800/30 md:bg-transparent">
            <div className="lg:ml-28 md:order-2 md:px-0 sm:px-10">
              <p className="text-3xl font-bold md:text-right text-center text-gray-100 lg:text-6xl md:text-5xl w-full md:leading-none mb-8">
                Pandemi melahirkan banyak orang kaya baru
              </p>
              <p className="md:text-xl lg:text-2xl tracking-tight font-normal md:text-right text-center text-gray-100 sm:leading-9">
                Pandemi mengakibatkan banyak pengusaha bangkrut, karyawan di PHK, pelajar dan mahasiswa bingung mengenai masa depan, ibu rumah tangga kesulitan mengelola keuangan, dan banyak orang terjerat hutang.
              </p>
              <br></br>
              <p className="md:text-xl lg:text-2xl tracking-tight font-normal md:text-right text-center text-gray-100 sm:leading-9">
                Tetapi... Mengapa justru disaat pandemi banyak lahir orang kaya baru?
              </p>
            </div>
          </div>
        </div>
        
        {/* Section 2 */}
        <div className='container my-14 mx-auto'>
          <p className='text-gray-700 md:text-5xl md:mx-14 px-14 text-4xl px-5 font-bold text-center my-6 py-6 tracking-tight'>
              8 Alasan Anda Harus Mulai Bersama
            <span className='block text-blueLogo mt-6'>MetaFranchise</span>
          </p>
          <div className='flex flex-wrap justify-center my-10 pb-10'>
            { section2.map((item, i)=>{
              return(
                <div key={i} className="mx-4 my-3 h-72 w-64 grid content-center max-w-xs mx-auto bg-white border-solid border-2 rounded-lg shadow-xl">
                  {item.icon}
                  <div className="px-5 text-center">
                    <span className="block text-gray-900 md:text-2xl text-sm font-bold">{item.title}</span>
                    <p className="md:text-lg font-normal text-sm text-gray-900 my-2">{item.desc}</p>
                  </div>
                </div>
              )
            }) }
          </div>
        </div>

        {/* Section 3 */}
        <div className="container grid md:grid-cols-3 grid-cols-1 py-14 px-10 mt-48 mx-auto bg-blue-200 max-w-none md:relative">
          <p className='text-blueLogo md:text-5xl text-4xl font-bold lg:text-center md:text-left text-center md:my-16 py-16'>
            What&apos;s Next ?
          </p>

          <div className='md:col-span-2 grid sm:grid-cols-2 grid-cols-1 lg:gap-4 gap-1 lg:mr-28 md:mr-6 md:absolute md:-top-1/4 md:right-0'>
            <div className="grid content-between w-64 my-16 max-w-xs mx-auto bg-white border-blueLogo border-solid border-2 rounded-sm shadow-xl relative">
              <div className="absolute w-1/2 -top-1/4 mt-4 left-1/4 bg-white border-blueLogo border-solid border-2 rounded-full">
                <BsFillPersonFill className='w-full p-6 h-full fill-blueLogo relative'/>
              </div>
              <div className="px-8 text-center mb-5 mt-14">
                <span className="block text-gray-900 text-2xl tracking-tight font-bold">Jadi Owner</span>
                <p className="text-lg font-normal text-gray-900 my-2">
                  Bila Anda tertarik untuk menjadi pemilik bisnis Meta Franchise dengan modal terjangkau dan tanpa resiko, silakan pelajari lebih lanjut di sini
                </p>
              </div>
              <Link to={'/owner'} className="px-4 py-2 w-full font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blueLogo hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Link
              </Link>
            </div>
            <div className="grid content-between w-64 my-16 max-w-xs mx-auto bg-white border-blueLogo border-solid border-2 rounded-sm shadow-xl relative">
              <div className="absolute w-1/2 -top-1/4 mt-4 left-1/4 bg-white border-blueLogo border-solid border-2 rounded-full">
                <BsFillDiagram2Fill className='w-full p-6 h-full fill-blueLogo relative'/>
              </div>
              <div className="px-8 text-center mb-5 mt-14">
                <span className="block text-gray-900 text-2xl tracking-tight font-bold">Jadi Reseller atau Dropshipper</span>
                <p className="text-lg font-normal text-gray-900 my-2">
                  Bila Anda tertarik hanya untuk menjadi Reseller atau dropshipper tanpa perlu modal awal, silahkan pelajari lebih lanjut di sini
                </p>
              </div>
              <Link to={'/reseller'} className="px-4 py-2 w-full font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blueLogo hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Link
              </Link>
            </div>
          </div>
        </div> 
        <Footer/>
      {/* Modal */}
      <div className={`${toggleModalReseller ? 'flex' : 'hidden'} fixed inset-0 h-full w-full`}>
        <RegisterReseller toggle={setToggleModalReseller} />
      </div>
      <div className={`${toggleModalOwner ? 'flex' : 'hidden'} fixed inset-0 h-full w-full`}>
        <RegisterOwner toggle={setToggleModalOwner} />
      </div>
    </div>
  )
}