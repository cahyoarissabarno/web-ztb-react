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
      {id:1,name: 'Nama Produk', link: '/shop/product', price: 100000, category: 'makanan', image: 'https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'},
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
    <div class="container flex mx-auto pt-10">
    <div class="flex shadow-md my-10 w-3/4">
      <div class="bg-white px-10 py-10 w-full">
        <a href="#" class="flex font-semibold text-indigo-600 text-sm my-4">
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">3 Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Select</h3>
        </div>
        {products.map((val, i)=>{
            return (
                <Link key={val.id} to={`${val.link}`}>
                    <a>
                      <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 text-left">
                        <div class="flex w-2/5 justify-center items-center"> 
                          <img class="h-16 mx-4" src={val.image} alt=""/>
                          <div class="flex flex-col">
                            <span class="font-bold text-sm">{val.name}</span>
                            <span class="text-gray-500 text-xs">{val.category}</span>
                            <a href="#" class="font-semibold hover:text-red-400 text-red-600 text-xs mt-4">Remove</a>
                          </div>
                        </div>
                        <div class="flex justify-center w-1/5">
                          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                          </svg>

                          <input class="mx-2 border text-center w-8" type="text" value="1"/>

                          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                          </svg>
                        </div>
                        <span class="text-center w-1/5 font-semibold text-sm">{val.price}</span>
                        <span class="text-center w-1/5 font-semibold text-sm">{val.price}</span>
                        <input type='checkbox' class="text-center w-1/5 font-semibold text-sm"/>
                      </div>
                    </a>
                </Link>
            )
        })}
      </div>
    </div>
    <div id="summary" class="w-1/4 px-8 py-5 my-10 right-2 text-left shadow-md fixed">
        <h1 class="font-semibold text-2xl border-b pb-4">Order Summary</h1>
        <div class="flex justify-between my-5">
          <span class="font-semibold text-sm uppercase">3 Items</span>
          <span class="font-semibold text-sm">590$</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full"/>
        </div>
        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded-lg">Apply</button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded-lg">Checkout</button>
        </div>
      </div>
  </div>
  </>
  )
}