import { useEffect, useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import Sidebar from '../../../components/admin/Sidebar'
import AddProduct from '../../../components/modal/AddProduct'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// require('dotenv').config()
// import Table from '../../components/admin/Table'
// import ProductModal from '../../components/admin/ProductModal'

export default function HomeAdmin() {
    const [toggleModal, setToggleModal] = useState(false)
    const [allData, setAllData] = useState([
        {category: 'kesehatan', status: 1, id: 1, name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {category: 'kesehatan', status: 1, id: 1, name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {category: 'kesehatan', status: 1, id: 1, name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {category: 'kesehatan', status: 1, id: 1, name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {category: 'kesehatan', status: 1, id: 1, name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {category: 'kesehatan', status: 1, id: 1, name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {category: 'kesehatan', status: 1, id: 1, name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {category: 'kesehatan', status: 1, id: 1, name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {category: 'kesehatan', status: 1, id: 1, name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {category: 'kesehatan', status: 1, id: 1, name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
      ])
    const [state, setState] = useState('Add')
    const [currData, setCurrData] = useState(false)
    const [searchKey, setSearchKey] = useState('')
    const menu = [
        {title: 'Product', link: '/admin/administrator'},
        {title: 'Order', link: '/admin/administrator/order'},
        {title: 'Modul', link: '/admin/administrator/modul'},
        {title: 'Event', link: '/admin/administrator/event'},
      ]

    const getAllData = async () =>{
        if (searchKey == '') {
            // axios.get(`/api/admin/administrator/product/10/1`)
            // .then((result) => {
            //     setAllData(result.data)
            //     // console.log(result.data)
            // }).catch((err) => {
            //     console.log(err)
            // });
        }
        else if (searchKey != ''){
            // axios.get(`/api/admin/administrator/product/search/${searchKey}/10/1`)
            // .then((result) => {
            //     setAllData(result.data)
            // }).catch((err) => {
            //     console.log(err)
            // });
       }
    }

    const getDataById = async(id)=>{
        // axios.get(`/api/admin/administrator/product/${id}`)
        // .then((result) => {
        //     setCurrData(result.data)
        // }).catch((err) => {
        //     console.log(err)
        // });
    }

    const delData = async (id) =>{
        // axios.delete(`/api/admin/administrator/product/${id}`)
        // .then((result) => {
        //     getAllData()
        //     // console.log(result)
        // }).catch((err) => {
        //    console.log(err) 
        // });
    }


    // useEffect(()=>{
    //     getAllData()
    //     // console.log(allData)
    // },[allData])
    
    return (
        <div className="flex">
            <div className='fixed z-10'>
                <Sidebar menu={menu} />
            </div>
            <div className='w-full flex'>
                {/* <Table toggle={setToggleModal} tg={toggleModal}/> */}
                <div className='lg:w-48 lg:mx-12'></div>
                <div className="w-full px-6 sm:px-8">
                    <div className="py-8">
                        <div className="grid md:grid-cols-2 auto-rows-auto md:w-full">
                            <div className="grid grid-cols-2 auto-rows-auto justify-self-start">
                                <h2 className="text-3xl leading-tight font-bold">
                                    Product
                                </h2>
                                <button onClick={()=>{setToggleModal(true); setCurrData(false); setState('Add')}} className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                                    + Add Product
                                </button>
                            </div>
                            <div className="flex md:mt-0 mt-7">
                                <input type="text" onChange={(e)=>{setSearchKey(e.target.value);}} value={searchKey} id="&quot;form-subscribe-Filter" className="w-4/6 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name"/>
                                
                                {/* <button onClick={()=>{setIsSearch(true); search()}} className="w-2/6 5px-4 py-2 mx-3 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                    Search
                                </button> */}
                            </div>
                        </div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-left text-sm uppercase font-normal">
                                                Nama Produk
                                            </th>
                                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-left text-sm uppercase font-normal">
                                                Kategori
                                            </th>
                                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-left text-sm uppercase font-normal">
                                                Created at
                                            </th>
                                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-left text-sm uppercase font-normal">
                                                status
                                            </th>
                                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-left text-sm uppercase font-normal">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { allData && allData.map((product, i)=>{
                                            return(
                                                <tr key={i}>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0">
                                                                <a href="#" className="block relative">
                                                                    <img className="mx-auto object-cover h-20 w-20" src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"/>
                                                                </a>
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    { product.name }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            { product.category }
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            { product.updated_at }
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                            </span>
                                                            <span className="relative">
                                                                { product.status == 1 ? 'Ada' : product.status == 1 ? 'Habis' : '-' }
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="py-5 border-b border-gray-200 bg-white text-sm">
                                                        <a onClick={()=>{getDataById(product.id); setState('Edit'); setToggleModal(true);}} className="text-indigo-600 hover:text-indigo-900 px-1">
                                                            Edit
                                                        </a>
                                                        <a onClick={()=>{delData(product.id)}} className="text-red-600 hover:text-red-900 px-1">
                                                            Delete
                                                        </a>
                                                        <Link to={`/shop/product/${product.id}`} target="_blank">
                                                            <a target="_blank" className="text-green-600 hover:text-green-900 px-1">
                                                                View
                                                            </a>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        }) }
                                    </tbody>
                                </table>
                                <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                                    <div className="flex items-center">
                                        <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                            <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                                </path>
                                            </svg>
                                        </button>
                                        <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                            1
                                        </button>
                                        <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                            2
                                        </button>
                                        <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                            3
                                        </button>
                                        <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                            4
                                        </button>
                                        <button type="button" className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                            <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${toggleModal ? 'fixed' : 'hidden'} z-20 w-full`}>
                <AddProduct toggle={setToggleModal} refetch={()=>getAllData()} state={state} data={currData[0]}/>
            </div>
        </div>
    )
  }