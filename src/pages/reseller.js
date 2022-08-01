import Navbar from '../components/community/Navbar'
import { MdAccountBalanceWallet } from "react-icons/md";
// import Link from 'next/link'
// import Image from "next/image";
import { useEffect, useState, useLayoutEffect } from 'react';
import Footer from '../components/community/Footer';
import { FaShieldAlt, FaWarehouse, FaBoxes, FaPeopleCarry, FaUsersCog, FaClipboardList 
  , FaChartLine, FaGlobeAsia, FaBuilding, FaCity, FaMedal, FaBook, FaTruckLoading, FaCartArrowDown } from "react-icons/fa";
import { BsPatchCheckFill, BsCheckCircleFill, BsCashCoin, BsFacebook } from "react-icons/bs";
import { GiMedicinePills, GiNotebook, GiShop, GiBuyCard } from "react-icons/gi";
import { MdMoneyOff, MdContentCopy } from "react-icons/md";
import RegisterReseller from '../components/modal/RegisterReseller';
import RegisterOwner from '../components/modal/RegisterOwner';

export default function ResellerHome() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [toggleModalReseller, setToggleModalReseller] = useState(false);
  const menu = [
    {title: 'Home', link: '/'},
    {title: 'Shop', link: '/shop'},
    {title: 'Owner', link: '/owner'},
    {title: 'Reseller', link: '/reseller'},
    {title: 'Event', link: '/event'},
    {title: 'About', link: '/about'},
  ]

  const section2 = [
    {num:"01.", desc: 'Ingin mendapatkan tambahan penghasilan ?' },
    {num:"02.", desc: 'Ingin mulai usaha, tapi gak punya modal ?' },
    {num:"03.", desc: 'Mau mulai, tapi bingung produk apa yang tepat untuk jualan ?' },
    {num:"04.", desc: 'Mau jualan, tapi gak pinter bikin konten, ga ngerti cara promosi jualan juga??' }
  ]

  const section3 = [
    {icon: <FaBoxes className='w-full p-4 h-24 fill-gray-100'/>, desc: '21 Juta Paket Dikirim via JNE Setiap Hari'},
    {icon: <FaTruckLoading className='w-full p-4 h-24 fill-gray-100'/>, desc: 'Setiap Bulan 20 Juta Produk Dikirimkan Tokopedia'},
    {icon: <GiShop className='w-full p-4 h-24 fill-gray-100' />, desc: 'Ada 6 Juta Pelapak Aktif dengan 50 juta transaksi per bulan di Bukalapak'},
    {icon: <GiBuyCard className='w-full p-4 h-24 fill-gray-100'/>, desc: 'Transaksi Harbolnas 2018 Tembus 6.8 Triliun, dan sekarang sudah masuk tahun 2022'},
    {icon: <BsFacebook className='w-full p-4 h-24 fill-gray-100'/>, desc: "Semakin Banyak Seller Yang Jualan via Facebook Ads"},
    {icon: <FaCartArrowDown className='w-full p-4 h-24 fill-gray-100'/>, desc: "5.8 Juta Order masuk ke Shopee dalam 24 Jam"}
  ]

  const section5 = [
    {icon: <MdMoneyOff className='w-full p-3 h-24 fill-blueLogo'/>, title:'Tanpa Modal', desc: 'Karena Hanya memerlukan Handphone yang terkoneksi dengan internet'},
    {icon: <GiMedicinePills className='w-full p-3 h-24 fill-blueLogo'/>, title:'Produk', desc: 'Produk Original, terbukti, dan memiliki kualitas yang sangat Baik'},
    {icon: <FaBook className='w-full p-3 h-24 fill-blueLogo' />, title:'Belajar', desc: 'Dibimbing sampai bisa, dengan materi jualan secara offline dan online dari pakarnya'},
    {icon: <MdContentCopy className='w-full p-3 h-24 fill-blueLogo'/>, title:'Konten', desc: 'Dapatkan Akses ke Ratusan lebih Konten yang sudah Siap Anda gunakan untuk meramaikan kegaiatan promosi jualan Anda'},
    {icon: <BsCashCoin className='w-full p-3 h-24 fill-blueLogo'/>, title:'Income', desc: "Dapatkan penghasilan Lebih besar dari yang Anda dapat saat ini hanya dari Rumah dengan bergabung menjadi Reseller"}
  ]

  const section6 = [
    {img: '/images/Webinar-Via-Zoom.webp', title: 'Webinar Via Zoom', desc: 'Penjelasan materi melalui Online, memudahkan untuk kita tetap belajar dimanapun dan kapanpun.'},
    {img: '/images/Offline-Meeting.webp', title: 'Offline Meeting', desc: 'Bisa ketemu langsung dengan mentor dan juga reseller lainnya untuk sharing dan belajar.'},
    {img: '/images/Offline-Training.webp', title: 'Offline Training', desc: 'Training berkala sesuai kebutuhan dan materi yang dibawakan oleh para Coach dan Master dibidangnya.'},
  ]

  const section7 = [
    {img: '/images/Komunitas.webp', title: 'Komunitas', title: 'Komunitas', desc: 'Tergabung bersama Ribuan Reseller lainnya dari seluruh Indonesia.'},
    {img: '/images/Akses-Bank-Konten.webp', title: 'Akses Bank Konten', desc: 'Mendapatkan Fasilitas Konten Jualan terupdate.'},
    {img: '/images/Coaching-Class.webp', title: 'Offline Coaching Class', desc: 'Coaching berkala secara offline maupun online bisa kapanpun dan dimanapun.'},
    {img: '/images/Produk-Pilihan.webp', title: 'Produk Pilihan', desc: 'Produk yang berkualitas dan terjamin original dan teruji Pasar .'},
    {img: '/images/Member-Area.webp', title: 'Member Area', desc: 'Akses ke Platform Digital khusus Member Area.'},
    {img: '/images/Inner-Circle.webp', title: 'Inner Circle', desc: 'Masuk ke Inner Circle bersama Coach dan trainer yang sudah berpengalaman di bidangnya.'},
    {img: '/images/Penghasilan-dari-Rumah.webp', title: 'Penghasilan dari Rumah', desc: 'Anda dapat mendapatkan penghasilan jutaan hanya dari Rumah.'},
  ]

  const section8 = [
    {img: '/images/testi1.png'}, {img: '/images/testi2.png'}, {img: '/images/testi3.png'}, {img: '/images/testi4.png'}, 
    {img: '/images/testi5.png'}, {img: '/images/testi6.png'}, {img: '/images/testi7.png'}, {img: '/images/testi8.png'}
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

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0)
  // });

  return (
    <>
      <Navbar menu={menu} bg={navbarBg} />
      <div style={{ backgroundImage: "url('/images/bg-blue-newww.webp')"}} className="container bg-cover bg-right-bottom max-w-none md:px-14 px-6 flex flex-col py-4 mx-auto space-y-6 lg:h-[42rem] py-16 md:flex-row md:items-center bg-blueLogo">
        <div className="flex flex-col mt-10 md:items-center w-full md:flex-row lg:w-1/2 w-3/4">
          <div className="max-w-lg md:mx-14 md:order-2 md:my-0 my-20">
            <p className="text-xl font-medium tracking-wide text-gray-100 lg:text-2xl">
              SELAMAT DATANG PARA PEMILIK USAHA
            </p>
            <h1 className="text-3xl font-bold tracking-wide text-gray-100 text-7xl my-10">
              Program Reseller
            </h1>
            <p className="text-xl font-medium tracking-wide text-gray-100 lg:text-2xl">
              Saatnya Anda gabung bersama ribuan orang lainnya di program Reseller dan hasilkan jutaan rupiah hanya dari rumah.
            </p>
          </div>
        </div>

        <div className="flex items-center mt-10 justify-center w-full h-full lg:w-1/2 md:flex hidden">
          <img className='object-cover object-right w-full h-full max-w-2xl' src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"/>
          {/* <div className='object-cover object-right w-full h-full max-w-2xl'> */}
            {/* <Image layout='intrinsic' width={550} height={550} objectFit='cover' className="rounded-full" 
            src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"/> */}
          {/* </div> */}
        </div>
        
      </div>

      {/* Section2 */}
      <div className='container max-w-none bg-gray-100 px-10 py-14 mx-auto grid md:grid-cols-2 grid-cols-1'>
        <div className='text-center py-10'>
          <p className='font-bold md:text-5xl text-4xl md:mx-6 mb-10 tracking-tighter'>Tahukah Anda ?</p>
          <img src="/images/box.png" className='object-cover mx-auto object-right w-full max-w-2xl' />
          {/* <div className='object-cover mx-auto object-right w-full max-w-2xl'> */}
            {/* <Image layout='intrinsic' width={450} height={350} objectFit='cover' className="rounded-md" 
            src="/box.png"/> */}
          {/* </div> */}
        </div>
        <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 py-10 px-5'>
          { section3.map((item, i)=>{
              return (
                <div key={i} className="px-3 py-5 md:w-48 flex flex-col">
                  <div style={{ backgroundImage: "url('/images/bg-blue-newww.webp')"}} className="w-16 h-16 bg-cover inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-3 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-800 text-lg font-medium text-left">{item.desc}</h2>
                  </div>
                </div>
              )
            }) }
        </div>
      </div>

      {/* Section3 */}
      <div className='container max-w-none md:p-10 p-10 my-14 mx-auto grid lg:grid-cols-2 grid-cols-1'>
        <div className='md:px-20'>
          <p className='md:text-5xl text-3xl my-3 font-bold text-gray-800 md:leading-tight'>
            Bagaimana Dengan Anda?
          </p><br></br>
          <p className='block text-lg font-normal'>Apakah selama ini Anda mengikuti semua data di atas sebagai pembeli? </p><br></br>
          <p className='block text-lg font-normal mb-7'>Sekarang, saatnya Anda jadi bagian dari Besarnya data tersebut dengan bergabung menjadi Reseller dan dapatkan peluang mendapatkan jutaan Rupiah hanya dari Rumah. </p>
        </div>
        {/* <div className='text-center'> */}
          <img src="/images/package.jpg" className='object-cover object-right h-96 w-full' />
          {/* <div className='object-cover object-right w-full h-full max-w-2xl mx-auto'> */}
            {/* <Image layout='intrinsic' width={550} height={360} objectFit='cover' className="mx-auto" 
            src="/package.jpg"/> */}
          {/* </div> */}
        {/* </div> */}
      </div>

      {/* Section4 */}
      <div className='container my-14 mx-auto'>
        <p className='text-gray-700 md:text-5xl md:mx-14 px-14 text-4xl px-5 font-bold text-center my-6 py-6 tracking-tight'>
          Apakah Anda?
        </p>
        <div className='flex flex-wrap justify-center my-10 pb-10'>
          { section2.map((item, i)=>{
            return(
              <div key={i} className="mx-4 my-3 h-64 w-64 p-3 grid max-w-xs mx-auto bg-blueLogo border-solid border-2 rounded-lg shadow-xl">
                <p className='text-9xl font-bold text-gray-100'>{item.num}</p>
                <div className="px-3">
                  <p className="md:text-md font-normal text-sm text-gray-100">{item.desc}</p>
                </div>
              </div>
            )
          }) }
        </div>
        <p className='font-bold text-2xl md:w-2/3 w-full px-16 text-center mx-auto'>Tenang, Dengan pengalaman Belasan Tahun membangun Ribuan Reseller,</p>
        <p className='font-bold text-2xl md:w-2/3 w-full px-16 text-center mx-auto my-8'>kami akan mensupport Anda untuk praktek dan hasilkan income hanya dari Rumah, dengan modal INTERNET & Social Media yang bisa dikerjakan dimanapun dan kapanpun!</p>
        <div className='mx-auto text-center my-24'>
          <p className='text-4xl font-bold text-blueLogo px-6'>Kami Punya Solusinya</p>
          <button onClick={()=>setToggleModalReseller(true)} className="px-6 py-3 my-6 rounded-lg font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-400 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Bergabung Sekarang
          </button>
        </div>
      </div>

      {/* Section5 */}
      <div className='container max-w-none bg-gray-100 py-14 mx-auto'>
        <p className='text-5xl font-bold text-center text-blueLogo px-10'>Kenapa Anda harus bergabung?</p>
        <div className='flex flex-wrap justify-center py-5 sm:w-3/4 md:w-full w-3/4 mx-auto'>
          { section5.map((item, i)=>{
            return (
              <div key={i} className="px-7 py-10 m-3 md:w-1/4 bg-white flex flex-col text-center items-center rounded-md shadow-xl border-solid border-x border-y">
                <div className="w-24 h-24 inline-flex items-center justify-center text-gray-500 flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900">{item.desc}</h2>
                </div>
              </div>
            )
          }) }
        </div>
      </div>
      
      {/* Section6 */}
      <section className="text-gray-600 body-font bg-gradient-to-t from-white to-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <section className="bg-blueLogo mt-14 rounded-3xl">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                Let&apos;s work together
              </h2>
              <p className="block max-w-2xl mt-4 text-xl text-gray-300">
              Mari mulai bergabung dan membangun koneksi, belajar dengan para pakar yang ahli dibidangnya untuk meningkatkan hasil penjualan Anda.
              </p>
              <div className="mt-6 sm:-mx-2">
                <div className="inline-flex w-full sm:w-auto sm:mx-2">
                  <a onClick={()=>setToggleModalReseller(true)} className="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-500">
                    Bergabung Sekarang
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Section7 */}
      <div className='p-10 items-center'>
        <p className='text-4xl font-bold text-center my-6'>Apa kata mereka</p>
        <div className='container mx-auto max-w-none md:grid grid-cols-2 grid-cols-1 md:p-10 gap-10'>
          <div className='grid lg:grid-cols-3 grid-cols-1 border-solid gap-5 border-x border-y p-8 my-6 shadow-lg'>
            <img className='h-32 w-32 object-cover rounded-full' src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872" />
            {/* <div className='object-cover object-right w-full max-w-2xl'> */}
              {/* <Image layout='intrinsic' width={550} height={550} objectFit='cover' className="rounded-full" 
              src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"/> */}
            {/* </div> */}
            <div className='col-span-2 text-left'>
              <p className='text-2xl font-bold'>Valentina</p>
              <p className='text-gray-500 py-4'>&quot;Setelah saya bergabung, saya mendapatkan berbagai pengalaman bahkan dan saya bisa membeli Handphone. Terimakasih!&quot;</p>
            </div>
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-1 border-solid gap-5 border-x border-y p-8 my-6 shadow-lg'>
            <img className='h-32 w-32 object-cover rounded-full' src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872" />
            {/* <div className='object-cover object-right w-full max-w-2xl'> */}
              {/* <Image layout='intrinsic' width={550} height={550} objectFit='cover' className="rounded-full" 
              src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"/> */}
            {/* </div> */}
            <div className='col-span-2 text-left'>
              <p className='text-2xl font-bold'>Valentina</p>
              <p className='text-gray-500 py-4'>&quot;Setelah saya bergabung, saya mendapatkan berbagai pengalaman bahkan dan saya bisa membeli Handphone. Terimakasih!&quot;</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section8 */}
      <div className='container p-10 mx-auto text-center'>
        <p className='text-2xl font-normal'>Testimonial Kami</p>
        <p className='text-5xl font-bold'>Testimoni Reseller</p>
        <div className='flex flex-wrap justify-center my-10'>
          { section8.map((item, i)=>{
            return(
              <div key={i} style={{ backgroundImage: `url(${item.img})`}} className="mx-4 my-3 h-64 w-64 grid max-w-xs mx-auto object-cover border-solid border-2 rounded-md shadow-xl">
                {/* <img className=' object-cover object-right mx-auto w-1/2' src={item.img} /> */}
                {/* <div className=' object-cover object-right w-full h-full mx-auto relative'> */}
                  {/* <Image layout='fill' objectFit='cover' src={item.img}/> */}
                {/* </div> */}
              </div>
            )
          }) }
        </div>
        <button onClick={()=>setToggleModalReseller(true)} className="p-3 lg:w-1/5 md:w-1/4 w-1/2 rounded-lg font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-400 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Bergabung Sekarang
        </button>
      </div>
      
      {/* Section9 */}
      <div className='grid justify-items-center mx-auto container max-w-none p-10'>
        <p className='md:text-5xl text-4xl font-medium p-5'>Kami Siapkan <span className='font-bold text-blueLogo'>Coaching</span> dan <span className='font-bold text-blueLogo'>Training</span></p>
        <p className='md:text-2xl text-xl font-normal p-5'>Anda bisa ikuti secara online maupun offline, Anda yang tentukan.</p>
        <div className='flex flex-wrap justify-center my-10 pb-10'>
          { section6.map((item, i)=>{
            return(
              <div key={i} className="md:mx-3 md:w-80 w-full my-4 grid grid-rows-2 max-w-xs mx-auto bg-white border-solid border-2 rounded-lg shadow-xl">
                <img className=' object-cover object-right w-full h-full mx-auto relative' src={item.img} />
                {/* <div className=' object-cover object-right w-full h-full mx-auto relative'> */}
                  {/* <Image layout='fill' objectFit='cover' src={item.img}/> */}
                {/* </div> */}
                <div className=" p-5 text-center">
                  <span className="block text-gray-900 md:text-2xl text-sm font-bold">{item.title}</span>
                  <p className="md:text-lg font-normal text-sm text-gray-900 my-2">{item.desc}</p>
                </div>
              </div>
            )
          }) }
        </div>
      </div>
      
      {/* Section10 */}
      <div className='grid justify-items-center container max-w-none p-10'>
        <p className='md:text-5xl text-4xl font-bold py-3'>Apa yang Anda dapatkan?</p>
        <div className='flex flex-wrap justify-center my-10'>
          { section7.map((item, i)=>{
            return(
              <div key={i} className="md:mx-3 my-3 md:w-80 w-full grid grid-rows-2 max-w-xs mx-auto bg-white border-solid border-2 rounded-lg shadow-xl">
                <img className=' object-cover object-right w-full h-full mx-auto relative' src={item.img} />
                {/* <div className=' object-cover object-right w-full h-full mx-auto relative'> */}
                  {/* <Image layout='fill' objectFit='cover' src={item.img}/> */}
                {/* </div> */}
                <div className=" p-5 text-center">
                  <span className="block text-gray-900 md:text-2xl text-sm font-bold">{item.title}</span>
                  <p className="md:text-lg font-normal text-sm text-gray-900 my-2">{item.desc}</p>
                </div>
              </div>
            )
          }) }
        </div>
        <button onClick={()=>setToggleModalReseller(true)} className="p-3 lg:w-1/5 md:w-1/4 w-1/2 rounded-lg font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-400 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Bergabung Sekarang
        </button>
      </div>

      {/* Section11 */}
      <div className='grid justify-items-center container max-w-none p-10 my-10'>
        <p className='md:text-2xl text-xl font-normal'>Bonus yang Anda Dapatkan</p>
        <p className='md:text-5xl text-4xl font-bold text-gray-800 text-center'>Jika Begabung Sekarang :</p>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5 my-10'>
          <img className='object-cover object-right mx-auto my-8' src="/images/book.webp" />
          {/* <div className='object-cover object-right mx-auto my-8'> */}
            {/* <Image layout='intrinsic' width={300} height={450} objectFit='cover' src="/book.webp"/> */}
          {/* </div> */}
          <div className='md:p-7 mt-12 text-left'>
            <p className='text-xl font-normal'>Paket Tools</p>
            <p className='md:text-5xl text-4xl font-bold text-gray-800'>Jualan Online</p>
            <div className='my-7 md:p-2'>
              <p className='text-lg font-normal'><BsCheckCircleFill className='inline w-6 h-6 fill-blueLogo'/> Konten Promosi (Foto & Video)</p>
              <p className='text-lg font-normal'><BsCheckCircleFill className='inline w-6 h-6 fill-blueLogo'/> Course Whatsapp Marketing</p>
              <p className='text-lg font-normal'><BsCheckCircleFill className='inline w-6 h-6 fill-blueLogo'/> Course Instagram Marketing</p>
              <p className='text-lg font-normal'><BsCheckCircleFill className='inline w-6 h-6 fill-blueLogo'/> Course Tiktok Marketing</p>
              <p className='text-lg font-normal'><BsCheckCircleFill className='inline w-6 h-6 fill-blueLogo'/> Course Copywriting</p>
            </div>
            <button onClick={()=>setToggleModalReseller(true)} className="p-3 w-58 rounded-lg font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-400 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Bergabung Sekarang
            </button>
          </div>
        </div>
      </div>
      
      {/* Section12 */}
      <div className='container mx-auto max-w-none p-10 mb-20 grid bg-gray-100 w-3/4 md:grid-cols-2 grid-cols-1 items-center justify-items-center shadow-xl'>
        <div className='lg:text-6xl text-4xl font-bold md:p-7'>See you at Member Area!</div>
        <div className='md:p-7 my-6'>
          <button onClick={()=>setToggleModalReseller(true)} className="lg:px-5 px-3 py-3 md:w-58 w-full rounded-md font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-400 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Bergabung Sekarang
          </button>
        </div>
      </div>
      
      <Footer/>

      {/* Modal */}
      <div className={`${toggleModalReseller ? 'flex' : 'hidden'} fixed inset-0 h-full w-full`}>
        <RegisterReseller toggle={setToggleModalReseller} />
      </div>
    </>
  )
}