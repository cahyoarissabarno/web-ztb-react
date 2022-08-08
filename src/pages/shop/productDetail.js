import { BsCartPlus } from "react-icons/bs";
import { useEffect, useState } from 'react';
import NavbarEcommerce from "../../components/ecommerce/Navbar";
import Slider from 'react-slick';
import { FaChevronLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import ProductList from "../../components/ecommerce/ProductList";
// import { useRouter } from 'next/router'
// import NavbarEcommerce from '../../../components/ecommerce/Navbar';
// import axios from "axios";

export default function ProductDetail() {
  // const router = useRouter()
  // const { id } = router.query
  let history = useHistory()
  const menu = [
    {title: 'Home', link: '/'},
    {title: 'Shop', link: '/shop'},
    {title: 'Owner', link: '/owner'},
    {title: 'Reseller', link: '/reseller'},
    {title: 'Event', link: '/event'},
    {title: 'About', link: '/about'},
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const allData = [
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  ]
  
  const currData = {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
   
  // const [currData, setCurrData] = useState(false) 
  // const getDataById = async()=>{
  //   axios.get(`/api/admin/administrator/product/${id}`)
  //   .then((result) => {
  //     setCurrData(result.data[0])
  //   }).catch((err) => {
  //     console.log(err)
  //   });
  // }

  // useEffect(()=>{
  //   getDataById()
  // },[id])

  return (
    // <div key={id}>
    <div>
      <NavbarEcommerce menu={menu} />
      <section className="text-gray-600 body-font overflow-hidden pt-6 pb-24">
        <div className="container md:px-5 py-24 mx-auto">
          <div className="w-4/5 mx-auto grid sm:grid-cols-2 grid-cols-1 flex items-center">
          {/* w-full lg:h-auto object-cover flex items-center */}
            <div className='md:w-11/12'>
                {/* <Image layout='fill' objectFit='contain' alt="ecommerce" className="rounded" src="https://dummyimage.com/400x400"/> */}
                {/* <img className="mx-auto" src="https://dummyimage.com/400x400"/> */}
                <Slider {...settings}>
                  <div className=''>
                    <img className="mx-auto" src="https://dummyimage.com/400x400"/>
                  </div>
                  <div className=''>
                    <img className="mx-auto" src="https://dummyimage.com/400x400"/>
                  </div>
                  <div className=''>
                    <img className="mx-auto" src="https://dummyimage.com/400x400"/>
                  </div>
                </Slider>
            </div>
            <div className="flex items-center">
              <div className="sm:p-6 p-3 mt-6 sm:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-8 text-left">{currData ? currData.name : ''}</h1>
                  
                <p className="leading-relaxed text-justify">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                
                {/* <div className="flex mt-10">
                  <span className="title-font font-medium text-2xl text-gray-900">Rp. {currData ? currData.price : ''}</span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy</button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-none mx-auto my-5 lg:px-20 px-10 text-left">
          <div className="w-full border-t-2 border-solid border-gray-300">
            <h4 className="text-2xl font-bold m-5 text-blueLogo">Rekomendasi</h4>
            <ProductList product={allData}/>
          </div>
        </div>

      </section>

      {/* border-solid border-t-4 border-blueLogo rounded-t-xl */}
      <div className="fixed container max-w-none z-20 bottom-0 px-3 backdrop-blur-sm">
        <div className="container md:w-4/5 mx-auto flex items-center md:my-6 my-3">
          <button onClick={()=>history.goBack()} className="ml-auto bg-blueLogo py-5 px-2 mr-1 hover:bg-blue-700 rounded-xl shadow-xl">
            <FaChevronLeft className='w-full h-5 fill-gray-200'/>
          </button>
          <div className="w-full md:px-10 px-4 py-3 mx-auto flex items-center justify-between bg-white shadow-xl rounded-xl border-solid border border-blue-400">
              <div><span className="title-font font-medium text-2xl text-blueLogo">Rp. {currData ? currData.price : ''}</span></div>
              <div className="flex">
                <button className="flex ml-auto text-white bg-blueLogo border-0 py-2 md:px-6 px-4 focus:outline-none hover:bg-blue-700 rounded-lg">Buy</button>
                {/* <button className="flex ml-auto text-white bg-blueLogo border-0 py-2 md:px-6 px-4 focus:outline-none hover:bg-blue-700 rounded-lg">+ Keranjang</button> */}
                <button className="w-10 h-10 border-0 p-1 inline-flex items-center justify-center ml-2">
                  <BsCartPlus className='w-full h-24 fill-blueLogo'/>
                </button>
              </div>
          </div>
        </div>
      </div>
  </div>
  )
}