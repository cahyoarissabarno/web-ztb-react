import CategoryList from '../../components/ecommerce/Category'
import NavbarEcommerce from '../../components/ecommerce/Navbar'
import ProductList from '../../components/ecommerce/ProductList'
import Carousel from '../../components/ecommerce/Carousel'
// import axios from 'axios'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CartPage() {
    const menu = [
      {title: 'Home', link: '/'},
      {title: 'Shop', link: '/shop'},
      {title: 'Owner', link: '/owner'},
      {title: 'Reseller', link: '/reseller'},
      {title: 'Event', link: '/event'},
      {title: 'About', link: '/about'},
    ]

    const products = [
      {id:1,name: 'Nama Produk jsdhfjhdfjs jsdhjfhsd', link: '/shop/product', price: 100000, category: 'makanan', image: 'https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'},
      {id:2,name: 'Nama Produk', link: '/shop/product', price: 100000, category: 'makanan', image: 'https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'},
      {id:3,name: 'Nama Produk', link: '/shop/product', price: 100000, category: 'makanan', image: 'https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'},
      {id:4,name: 'Nama Produk', link: '/shop/product', price: 100000, category: 'makanan', image: 'https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'},
      {id:5,name: 'Nama Produk', link: '/shop/product', price: 100000, category: 'makanan', image: 'https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'},
      {id:6,name: 'Nama Produk', link: '/shop/product', price: 100000, category: 'makanan', image: 'https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'},
      {id:7,name: 'Nama Produk', link: '/shop/product', price: 100000, category: 'makanan', image: 'https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'},
      {id:8,name: 'Nama Produk', link: '/shop/product', price: 100000, category: 'makanan', image: 'https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'},
      {id:9,name: 'Nama Produk', link: '/shop/product', price: 100000, category: 'makanan', image: 'https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'},
      {id:10,name: 'Nama Produk', link: '/shop/product', price: 100000, category: 'makanan', image: 'https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'},
    ]

  return (
    <>
    <NavbarEcommerce menu={menu}/>
    <div class="container max-w-none flex md:flex-row flex-col mx-auto pt-10">
    <div class="flex my-10 md:w-4/6 w-full">
      <div class="bg-white px-10 w-full">
        <a href="#" class="flex font-semibold text-indigo-600 text-sm my-4">
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">3 Items</h2>
        </div>
        {products.map((val, i)=>{
            return (
              <div class="flex items-center md:flex-row flex-col hover:bg-gray-100 -mx-8 p-4 text-left">
                <Link key={val.id} to={`${val.link}`} class="flex md:w-3/5 w-full items-center">
                  <img class="h-16 mx-4" src={val.image} alt=""/>
                  <div class="flex flex-col">
                    <span class="font-bold text-md">{val.name}</span>
                    <span class="text-gray-500 text-sm">{val.category}</span>
                  </div>
                </Link>
                <div className='w-full flex justify-between my-2'>
                  <a href="#" class="font-semibold hover:text-red-400 text-red-600 w-1/5 text-md flex justify-center items-center"> H</a>
                  <div class="flex md:justify-center md:w-1/5">
                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>

                    <input class="mx-2 border text-center w-8" type="text" value="1"/>

                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
                  </div>
                  <span class="w-2/5 font-semibold text-md flex items-center justify-center">{val.price}</span>
                  <input type='checkbox' class="text-center w-1/5 font-semibold text-sm"/>
                </div>
              </div>
            )
        })}
      </div>
    </div>
    <div id="summary" class="md:w-2/6 w-full">
        <div className='bg-blue-200 md:px-5 px-4 md:py-3 pt-3 md:my-10 text-left shadow-md md:fixed rounded-md'>
          <div class="py-1 ml-1 md:ml-0">
            <label for="promo" class="font-semibold inline-block md:mb-1 text-sm md:flex hidden">Nama Penerima</label>
            <input type="text" id="promo" placeholder="Masukan Nama Penerima" class="p-2 text-sm shadow-md rounded-md w-full"/>
          </div>
          <div class="py-1 ml-1 md:ml-0">
            <label for="promo" class="font-semibold inline-block md:mb-1 text-sm md:flex hidden">No.Telp Penerima</label>
            <input type="text" id="promo" placeholder="Masukan No.Telp Penerima" class="p-2 text-sm shadow-md rounded-md w-full"/>
          </div>
          <div class="py-1 ml-1 md:ml-0">
            <label for="promo" class="font-semibold inline-block md:mb-1 text-sm md:flex hidden">Alamat Penerima</label>
            <textarea id="promo" placeholder="Masukan Alamat Penerima" class="p-2 text-sm shadow-md rounded-md w-full"></textarea>
          </div>
          <div className='grid grid-cols-2 flex items-center mb-1'>
            <div class="ml-1">
              <label for="promo" class="font-semibold inline-block md:mb-1 text-sm md:flex hidden">Kode Pos</label>
              <input type="text" id="promo" placeholder="Masukan Kode Pos" class="p-2 text-sm shadow-md rounded-md w-full"/>
            </div>
            <div class="ml-1">
              <label for="promo" class="font-semibold inline-block md:mb-1 text-sm md:flex hidden">Kode Promo</label>
              <input type="text" id="promo" placeholder="KodePromo(Jika ada)" class="p-2 text-sm shadow-md rounded-md w-full"/>
            </div>
            {/* <div className='flex items-center w-2/4'>
              <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white rounded-lg w-3/4">Apply</button>
            </div> */}
          </div>
          <div className='py-1 mx-1 md:mr-0'>
            <label class="font-medium inline-block md:mb-1 text-sm md:flex hidden">Kecamatan/Kota</label>
            <select class="block p-2 text-gray-600 w-full text-sm shadow-md rounded-md">
              <option>Keputih, Surabaya</option>
            </select>
          </div>
          <div className='py-1 mx-1 md:mr-0'>
            <label class="font-medium inline-block md:mb-1 text-sm md:flex hidden">Shipping</label>
            <select class="block p-2 text-gray-600 w-full text-sm shadow-md rounded-md">
              <option>Standard shipping</option>
            </select>
          </div>
          <div class="grid md:grid-cols-1 grid-cols-4 mx-2">
            <div class="flex font-semibold md:justify-between flex-col md:flex-row md:py-1 py-2 text-sm text-left">
              <span className='font-bold'>Subtotal</span>
              <span>15.000.000</span>
            </div>
            <div class="flex font-semibold md:justify-between flex-col md:flex-row md:py-1 py-2 text-sm text-left">
              <span className='font-bold'>Ongkir</span>
              <span>20.000</span>
            </div>
            <div class="flex font-semibold md:justify-between flex-col md:flex-row md:py-1 py-2 text-sm text-left">
              <span className='font-bold'>Total</span>
              <span>15.020.000</span>
            </div>
            <div className='flex items-center'>
              <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-2 text-sm text-white w-full rounded-lg">Bayar</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  </>
  )
}