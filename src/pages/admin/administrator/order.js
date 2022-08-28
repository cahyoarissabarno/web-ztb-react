import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import Sidebar from '../../../components/admin/Sidebar'
import DetailOrderMaster from '../../../components/modal/DetailOrderMaster'
// import Table from '../../components/admin/Table'
// import ProductModal from '../../components/admin/ProductModal'

export default function Order() {
    const [toggleModal, setToggleModal] = useState(false)
    const [orderModal, setOrderModal] = useState(false)
    const menu = [
        {title: 'Product', link: '/admin/administrator'},
        {title: 'Order', link: '/admin/administrator/order'},
        {title: 'Reseller', link: '/admin/administrator/reseller-list'},
        {title: 'Owner', link: '/admin/administrator/owner-list'},
        {title: 'Modul', link: '/admin/administrator/modul'},
        {title: 'Event', link: '/admin/administrator/event'},
      ]
    
    return (
            <div className="flex bg-gray-50">
                <div>
                    <Sidebar menu={menu} id={null} status={'Admin Master'} />
                </div>
                <div className='w-full'>
                    {/* <Table toggle={setToggleModal} tg={toggleModal}/> */}
                    <div className="px-6 sm:px-8">
                        <div className="py-8">
                            <div className="grid md:grid-cols-1 auto-rows-auto md:w-full">
                                <div className="flex justify-between">
                                    <h2 className="text-3xl leading-tight font-bold">
                                        Order
                                    </h2>
                                    <div>
                                        <button className="flex-shrink-0 px-4 py-2 mx-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                                            + Rekap Order
                                        </button>
                                    </div>
                                </div>
                                <div className="flex md:mt-4 mt-7">
                                    <input type="text" id="&quot;form-subscribe-Filter" className="w-4/6 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search Disini ...."/>
                                    
                                </div>
                            </div>
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-center text-sm uppercase font-normal">
                                                    ID Order
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-center text-sm uppercase font-normal">
                                                    Nama Produk
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-center text-sm uppercase font-normal">
                                                    Nama Pembeli
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-center text-sm uppercase font-normal">
                                                    Resi
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-center text-sm uppercase font-normal">
                                                    status
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-center text-sm uppercase font-normal">
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        873828
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                Jean marc
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Admin
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        92929382938
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                        </span>
                                                        <span className="relative">
                                                            Terkirim
                                                        </span>
                                                    </span>
                                                </td>
                                                <td className="py-5 border-b border-gray-200 bg-white text-sm">
                                                    {/* <a href="#" className="text-indigo-600 font-bold hover:text-indigo-900 mx-2">
                                                        + Resi
                                                    </a> */}
                                                    {/* reject transaksi (uang kembali) */}
                                                    <a href="#" className="text-red-600 font-bold hover:text-red-900 mx-2">
                                                        reject
                                                    </a>
                                                    <a onClick={()=>{setOrderModal(true)}} href="#" className="text-green-600 font-bold hover:text-green-900 mx-2">
                                                        View
                                                    </a>
                                                    <a href="#" className="text-blue-600 font-bold hover:text-green-900 mx-2">
                                                        Print Label
                                                    </a>
                                                </td>
                                            </tr>
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
                <div className={`${orderModal ? 'fixed' : 'hidden'} z-20 w-full`}>
                    <DetailOrderMaster toggle={setOrderModal}/>
                </div>
            </div>
    )
  }