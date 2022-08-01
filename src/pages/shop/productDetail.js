import { MdAccountBalanceWallet } from "react-icons/md";
// import Link from 'next/link'
// import Image from 'next/image'
import { useEffect, useState } from 'react';
import NavbarEcommerce from "../../components/ecommerce/Navbar";
// import { useRouter } from 'next/router'
// import NavbarEcommerce from '../../../components/ecommerce/Navbar';
// import axios from "axios";

export default function ProductDetail() {
  // const router = useRouter()
  // const { id } = router.query
  const menu = [
    {title: 'Home', link: '/'},
    {title: 'Shop', link: '/shop'},
    {title: 'Owner', link: '/owner'},
    {title: 'Reseller', link: '/reseller'},
    {title: 'Event', link: '/event'},
    {title: 'About', link: '/about'},
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
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center relative'>
                    {/* <Image layout='fill' objectFit='contain' alt="ecommerce" className="rounded" src="https://dummyimage.com/400x400"/> */}
                    <img src="https://dummyimage.com/400x400"/>
                </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium my-8">{currData ? currData.name : ''}</h1>
                
                <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                
                <div className="flex mt-10">
                    <span className="title-font font-medium text-2xl text-gray-900">Rp. {currData ? currData.price : ''}</span>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy</button>
                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}