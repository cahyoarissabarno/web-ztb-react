import Navbar from '../components/community/Navbar'
import { FaShieldAlt, FaWarehouse, FaBoxes, FaPeopleCarry, FaUsersCog, FaClipboardList 
  , FaChartLine, FaGlobeAsia, FaBuilding, FaCity, FaMedal } from "react-icons/fa";
import { BsPatchCheckFill, BsCheckCircleFill } from "react-icons/bs";
import { GiMedicinePills, GiNotebook } from "react-icons/gi";
// import Link from 'next/link'
// import Image from 'next/image'
import { useEffect, useState, useLayoutEffect } from 'react';
import Footer from '../components/community/Footer';
import Slider from 'react-slick';
import RegisterReseller from '../components/modal/RegisterReseller';
import RegisterOwner from '../components/modal/RegisterOwner';

export default function OwnerHome() {
  const [navbarBg, setNavbarBg] = useState(false);
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
    {icon: <FaShieldAlt className='w-full p-6 h-24 fill-gray-100'/>, title: 'Perizinan' },
    {icon: <FaWarehouse className='w-full p-6 h-24 fill-gray-100'/>, title: 'Produksi' },
    {icon: <FaBoxes className='w-full p-6 h-24 fill-gray-100'/>, title: 'Logistik' },
    {icon: <FaUsersCog className='w-full p-6 h-24 fill-gray-100'/>, title: 'Karyawan' },
    {icon: <FaPeopleCarry className='w-full p-6 h-24 fill-gray-100'/>, title: 'Operasional' },
    {icon: <FaClipboardList className='w-full p-6 h-24 fill-gray-100'/>, title: 'Administrasi dan lain-lain' },
  ]

  const section3 = [
    {icon: <FaCity className='w-full p-6 h-24 fill-blueLogo'/>, desc: 'Berusia lebih dari 27 tahun'},
    {icon: <FaChartLine className='w-full p-6 h-24 fill-blueLogo'/>, desc: 'Memiliki valuasi ratusan trilyun rupiah'},
    {icon: <FaGlobeAsia className='w-full p-6 h-24 fill-blueLogo' />, desc: 'Perusahaan multinasional dengan cabang di lebih dari 100 negara'},
    {icon: <FaBuilding className='w-full p-6 h-24 fill-blueLogo'/>, desc: 'Memiliki pabrik sendiri berlokasi di beberapa negara'},
    {icon: <BsPatchCheckFill className='w-full p-6 h-24 fill-blueLogo'/>, desc: "Model bisnis yang sudah terferifikasi syariah dari DSN MUI"}
  ]

  const section5 = [
    {icon: <FaGlobeAsia className='w-full p-3 h-24 fill-blueLogo'/>, desc: 'Terdaftar resmi di lebih dari 100 negara, termasuk Indonesia'},
    {icon: <GiMedicinePills className='w-full p-3 h-24 fill-blueLogo'/>, desc: 'Sudah dikonsumsi lebih dari 46 juta keluarga di seluruh dunia'},
    {icon: <FaMedal className='w-full p-3 h-24 fill-blueLogo' />, desc: 'Mendapatkan puluhan sertifikat dan penghargaan tingkat global (dunia) dan nasional (Indonesia)'},
    {icon: <GiNotebook className='w-full p-3 h-24 fill-blueLogo'/>, desc: 'Sudah mendapatkan ribuan testimoni serta memiliki tingkat repeat order tinggi'},
    {icon: <BsPatchCheckFill className='w-full p-3 h-24 fill-blueLogo'/>, desc: "Sudah mendapatkan izin BPOM dan sertifikat halal MUI"}
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
};

const settings2 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

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
    <>
      {/* Section1 */}
      <Navbar menu={menu} bg={navbarBg} />
      <div style={{ backgroundImage: "url('/images/bg-blue-newww.webp')"}} className="container bg-cover max-w-none px-14 flex flex-col py-4 mx-auto space-y-6 lg:h-[42rem] py-16 md:flex-row md:items-center bg-blueLogo">
        <div className="flex flex-col mt-10 md:items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-14 md:order-2">
            <h1 className="text-xl font-bold tracking-wide text-gray-100 lg:text-3xl uppercase">
              Satu langkah menjadi
            </h1>
            <h1 className="text-3xl font-bold tracking-wide text-gray-100 lg:text-6xl underline">
              PEMILIK USAHA
            </h1>
          </div>
        </div>
        <div className="flex items-center mt-10 justify-center w-full h-full lg:w-1/2">
          <img className='object-cover object-right w-full h-full max-w-2xl rounded-md' src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872" />
          {/* <div className='object-cover object-right w-full h-full max-w-2xl'> */}
            {/* <Image layout='intrinsic' width={550} height={550} objectFit='cover' className="rounded-md" 
            src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"/> */}
          
          {/* </div> */}
        </div>
      </div>
      
      {/* Section2 */}
      <section className="text-gray-600 body-font bg-gradient-to-b from-gray-200 to-white">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center md:mb-20 md:mx-14 mb-14">
            <p className='text-gray-800 md:text-5xl md:px-14 text-4xl px-5 py-5 font-bold text-center tracking-tighter md:leading-relaxed'>
              Kenapa Anda harus menjadi pemilik bisnis
              <span className='inline text-blueLogo'> MetaFranchise</span> ?
            </p>
            <p className='text-gray-500 text-2xl tracking-tight'>Karena Meta Franchise adalah Bisnis yang siap jalan, tanpa perlu lagi mengurus sendiri</p>
          </div>
          <div className="flex flex-wrap px-9 sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center">
            { section2.map((item, i)=>{
              return (
                <div key={i} className="p-4 md:w-48 flex flex-col text-center items-center">
                  <div style={{ backgroundImage: "url('/images/bg-blue-newww.webp')"}} className="w-24 h-24 bg-cover inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-3 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-2xl font-bold mb-3">{item.title}</h2>
                  </div>
                </div>
              )
            }) }
          </div>
        </div>
      </section>
      
      {/* Section3 */}
      <div className='container max-w-none bg-gray-100 p-10 my-14 mx-auto grid md:grid-cols-2 grid-cols-1'>
        <div className='text-center py-10'>
          <img src="/images/buildings.png" className='object-cover mx-auto object-right md:w-1/2 w-full max-w-2xl'/>
          {/* <div className='object-cover mx-auto object-right md:w-1/2 w-full max-w-2xl'> */}
            {/* <Image layout='intrinsic' width={550} height={550} objectFit='cover' className="rounded-md" 
            src="/buildings.png"/> */}
          {/* </div> */}
          <p className='font-bold text-3xl lg:text-4xl md:mx-6 mt-6 tracking-tighter'>Bekerja sama dengan perusahaan yang sangat besar dan kuat</p>
        </div>
        <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center py-10'>
          { section3.map((item, i)=>{
                return (
                  <div key={i} className="px-4 md:w-48 flex flex-col text-center items-center">
                    <div className="w-24 h-24 inline-flex items-center justify-center text-gray-500 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg font-medium">{item.desc}</h2>
                    </div>
                  </div>
                )
              }) }
        </div>
      </div>

      {/* Section4 */}
      <div className='container max-w-none md:p-10 p-5'>
        <div className='md:w-3/5 w-full bg-blueLogo md:px-14 px-6 md:py-12 py-6 mx-auto rounded-xl shadow-xl'>
          <p className='md:text-2xl text-lg text-white'>Pendiri Perusahaan adalah Salah satu orang terkaya di Cina, Penerima gelar Doktor Honoris Causa dari PBB, Seorang filantropis yang banyak melakukan kegiatan sosial dan amal di seluruh dunia.</p>
        </div>
        <p className='md:w-3/5 w-full mt-24 md:text-5xl text-3xl text-gray-800 font-bold font-sans mx-auto text-center tracking-tighter'>Memiliki puluhan lini produk sangat berkualitas yang:</p>
      </div>

      {/* Section5 */}
      <div className='container max-w-none bg-gray-100 mb-14 mx-auto'>
        <div className='flex flex-wrap justify-center py-10'>
          { section5.map((item, i)=>{
                return (
                  <div key={i} className="p-12 m-3 md:w-1/4 bg-white flex flex-col text-center items-center rounded-md shadow-xl border-solid border-x border-y">
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
      <div className='container max-w-none md:p-20 p-10 my-10 mx-auto grid md:grid-cols-2 grid-cols-1'>
        <div className='text-center'>
          <img src="/images/perspective_matte.png" className='object-cover mx-auto md:w-3/4 w-full max-w-2xl'/>
          {/* <div className='object-cover mx-auto md:w-3/4 w-full max-w-2xl'> */}
            {/* <Image layout='intrinsic' width={550} height={550} objectFit='cover' className="rounded-md" 
            src="/perspective_matte.png"/> */}
          {/* </div> */}
        </div>
        <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center items-center py-10 px-14'>
          <p className='md:text-5xl text-2xl font-normal text-gray-800 tracking-tighter leading-relaxed'>
            Berpotensi memiliki 
            <span className='font-bold'> penghasilan sangat besar </span> 
            yang dapat menjadi
            <span className='font-bold'> aset </span>
            dan bahkan bisa
            <span className='font-bold'> diwariskan</span>
          </p>
        </div>
      </div>

      {/* Section7 */}
      <div className='container max-w-none my-14 mx-auto grid md:grid-cols-2 grid-cols-1'>
        <div className='text-center items-center'>
          <img src="/images/online-marketing.png" className='mx-auto md:w-3/4 w-full max-w-2xl'/>
          {/* <div className='object-cover mx-auto md:w-3/4 w-full max-w-2xl'> */}
            {/* <Image layout='intrinsic' width={550} height={550} objectFit='cover' className="rounded-md" 
            src="/online-marketing.png"/> */}
          {/* </div> */}
        </div>
        <div className='flex flex-wrap justify-center items-center py-10 md:px-14 px-7 text-left'>
          <div>
            <p className='md:text-5xl text-3xl font-bold text-gray-800 tracking-tighter leading-snug'>Adanya organisasi pendukung</p>
            <p className='md:text-2xl text-xl font-normal py-3 tracking-tight'>
              yang berperan sebagai sekolah bisnis dan memberikan berbagai fasilitas berkesinambungan berupa:
              <span className='block md:text-2xl text-xl font-normal'> <BsCheckCircleFill className='inline w-6 h-6 fill-blueLogo'/> Platform digital terpadu</span>
              <span className='block md:text-2xl text-xl font-normal'> <BsCheckCircleFill className='inline w-6 h-6 fill-blueLogo'/> Berbagai alat bantu</span>
              <span className='block md:text-2xl text-xl font-normal'> <BsCheckCircleFill className='inline w-6 h-6 fill-blueLogo'/> Training online maupun offline, dan lain-lain</span>
            </p>
          </div>
        </div>
      </div>

      {/* Section8 */}
      <div className='container bg-cover bg-right max-w-none relative' style={{ backgroundImage: "url('/images/seminar.jpg')"}}>
        <div className='grid md:grid-cols-2 grid-cols-1 md:p-12 bg-gradient-to-r from-blueLogo to-transparent'>
          <p className='text-3xl md:px-24 px-10 py-10 text-gray-100 font-normal tracking-tight'>Adanya konvensi internasional rutin tahunan yang dihadiri ribuan peserta dari puluhan negara.</p>
        </div>
      </div>

      {/* Section9 */}
      <div className='container max-w-none md:p-32 p-10 mx-auto grid md:grid-cols-3 grid-cols-1'>
        <div className='text-center'>
          <img src="/images/piala.png" className='object-cover mx-auto w-full max-w-2xl' />
          {/* <div className='object-cover mx-auto w-full max-w-2xl'> */}
            {/* <Image layout='intrinsic' width={550} height={550} objectFit='cover' className="rounded-md" 
            src="/piala.png"/> */}
          {/* </div> */}
        </div>
        <div className='col-span-2 flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center py-10 md:px-20'>
          <p className='md:text-5xl text-3xl font-normal font-extrabold text-gray-800 leading-normal'>
            Berpotensi mendapatkan sangat banyak Reward gratis
          </p>
          <p className='block text-2xl font-normal'>
            yang total nilainya dapat mencapai milyaran rupiah per orang
          </p>
        </div>
      </div>

      {/* Section10 */}
      <div className='container mx-auto p-10 text-center'>
        <p className='md:text-5xl text-4xl font-bold mx-auto text-blue-400 mb-6'>Para Penerima Reward</p>
        <div className="conatiner md:p-10">
          <Slider {...settings}>
            <div className='md:px-5 px-1'>
              <img src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            </div>
            <div className='md:px-5 px-1'>
              <img src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            </div>
            <div className='md:px-5 px-1'>
              <img src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            </div>
            <div className='md:px-5 px-1'>
              <img src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            </div>
            <div className='md:px-5 px-1'>
              <img src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            </div>
            <div className='md:px-5 px-1'>
              <img src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            </div>
            <div className='md:px-5 px-1'>
              <img src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            </div>
            {/* <div>
              <img className="px-5 object-cover" src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            </div> */}
            {/* <img className="px-5 object-cover" src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <img className="px-5 object-cover" src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <img className="px-5 object-cover" src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <img className="px-5 object-cover" src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <img className="px-5 object-cover" src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/> */}
          </Slider>
        </div>
        <button onClick={()=>setToggleModalOwner(true)} className="p-3 mt-8 md:mt-0 rounded-lg font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-400 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Bergabung Sekarang
        </button>
      </div>
      
      <div className='container max-w-none mx-auto my-28'>
        {/* Section11 */}
        <div className='md:w-2/3 w-3/4 mx-auto bg-cover bg-right my-16 shadow-xl rounded-lg' style={{ backgroundImage: "url('/images/bg-youtube.webp')"}}>
          <div className='grid md:grid-cols-2 grid-cols-1 p-8 bg-no-repeat bg-right' style={{ backgroundImage: "url('/images/youtube.webp')"}}>
            <div className='text-left'>
              <p className='text-4xl py-3 text-gray-900 font-bold tracking-tight'>Penjelasan Singkat</p>
              <p className='text-xl py-3 text-gray-900 font-normal tracking-tight'>Klik tombol dibawah ini untuk menyaksikan video penjelasan singkat, sebelum anda memulai perjalanan bisnis Anda</p>
              <button className="p-3 md:w-1/4 w-1/2 rounded-lg font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-500 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-80">
                Lihat
              </button>
            </div>
          </div>
        </div>

        {/* Section12 */}
        <div className='md:w-2/3 w-3/4 mx-auto bg-cover bg-right my-16 shadow-xl rounded-lg' style={{ backgroundImage: "url('/images/bg-zoom.webp')"}}>
          <div className='grid md:grid-cols-2 grid-cols-1 p-8 bg-no-repeat bg-right' style={{ backgroundImage: "url('/images/zoom.webp')"}}>
            <div className='text-left'>
              <p className='text-4xl py-3 text-gray-900 font-bold tracking-tight'>Penjelasan Singkat</p>
              <p className='text-xl py-3 text-gray-900 font-normal tracking-tight'>Klik tombol dibawah ini untuk menyaksikan video penjelasan singkat, sebelum anda memulai perjalanan bisnis Anda</p>
              <button className="p-3 md:w-1/4 w-1/2 rounded-lg font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-400 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      {/* Modal */}
      <div className={`${toggleModalOwner ? 'flex' : 'hidden'} fixed inset-0 h-full w-full`}>
        <RegisterOwner toggle={setToggleModalOwner} />
      </div>
    </>
  )
}