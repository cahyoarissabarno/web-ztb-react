import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import Sidebar from '../../../components/admin/Sidebar'
// import Table from '../../components/admin/Table'
// import ProductModal from '../../components/admin/ProductModal'

export default function ResellerNetworkTools() {
    const [toggleModal, setToggleModal] = useState(false)
    const menu = [
        {title: 'History Order', link: '/admin/reseller'},
        {title: 'Selling Tools', link: '/admin/reseller/selling-tools'},
        {title: 'VShare', link: '/admin/reseller/vshare'},
        {title: 'NetworkTools', link: '/admin/reseller/network-tools'},
      ]
    
    return (
        <div className="flex bg-gray-50">
            <div>
                <Sidebar menu={menu} id={'KSO990'} status={'reseller'} />
            </div>
            <div className='w-full'>
                {/* <Table toggle={setToggleModal} tg={toggleModal}/> */}
                <div className="px-6 sm:px-8">
                    <div className="py-8">
                        <div className="grid md:grid-cols-2 auto-rows-auto md:w-full">
                            <div className="grid grid-cols-2 auto-rows-auto justify-self-start">
                                <h2 className="text-3xl leading-tight font-bold">
                                    Network Tools
                                </h2>
                            </div>
                            <div className="text-end md:mt-0 mt-7 w-full">
                                <form className="w-full justify-center">
                                    <input type="text" id="&quot;form-subscribe-Filter" className="rounded-lg shadow-xl border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="search here .."/>
                    
                                </form>
                            </div>
                        </div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-left text-sm uppercase font-normal">
                                                Judul Modul
                                            </th>
                                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-left text-sm uppercase font-normal">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <a href="#" className="block relative">
                                                            <img className="mx-auto object-cover h-20 w-20" src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"/>
                                                        </a>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            Cara Cepat Wirausaha
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-5 border-b border-gray-200 bg-white text-sm">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900 px-1">
                                                    Baca
                                                </a>
                                                <a href="#" className="text-green-600 hover:text-green-900 px-1">
                                                    Download
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
        </div>
)
  }