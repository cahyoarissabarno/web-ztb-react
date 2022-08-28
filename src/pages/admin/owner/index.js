import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import Sidebar from '../../../components/admin/Sidebar'
// import Table from '../../components/admin/Table'
// import ProductModal from '../../components/admin/ProductModal'

export default function MemberList() {
    const [viewToggle, setViewToggle] = useState(false)
    const menu = [
        {title: 'Member List', link: '/admin/owner'},
        {title: 'History Order', link: '/admin/owner/history-order'},
        {title: 'Selling Tools', link: '/admin/owner/selling-tools'},
        {title: 'VShare', link: '/admin/owner/vshare'},
        {title: 'NetworkTools', link: '/admin/owner/network-tools'},
      ]
    
    return (
            <div className="flex bg-gray-50">
                <div>
                    <Sidebar menu={menu} id={'JSH887D'} status={'owner'}/>
                </div>
                <div className='w-full'>
                    {/* <Table toggle={setToggleModal} tg={toggleModal}/> */}
                    <div className="px-6 sm:px-8">
                        <div className="py-8">
                            <div className="grid md:grid-cols-2 auto-rows-auto md:w-full">
                                <div className="grid grid-cols-2 auto-rows-auto justify-self-start">
                                    <h2 className="text-3xl leading-tight font-bold">
                                        Member List
                                    </h2>
                                    {/* <button onClick={()=>setToggleModal(true)} className="flex-shrink-0 px-4 py-2 mx-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                                        + Add Member
                                    </button> */}
                                </div>
                                <div className="text-end w-full md:mt-0 mt-7">
                                    <form className="w-full md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                        <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent shadow-xl flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="search here ..."/>
                                        
                                        {/* <button className=" px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                            Filter
                                        </button> */}
                                    </form>
                                </div>
                            </div>
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr><th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-center text-sm uppercase font-normal">
                                                    ID
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-center text-sm uppercase font-normal">
                                                    Nama Member
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-center text-sm uppercase font-normal">
                                                    Penjualan
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-center text-sm uppercase font-normal">
                                                    Keuntungan 
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-center text-sm uppercase font-normal">
                                                    Poin
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-center text-sm uppercase font-normal">
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        554q21
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        John Doe
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        50 produk
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Rp 3000.000
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        100
                                                    </p>
                                                </td>
                                                <td className="py-5 border-b border-gray-200 bg-white text-sm">
                                                    <a href="#" onClick={()=>{setViewToggle(true)}} className="text-green-600 hover:text-green-900 px-1">
                                                        View
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
                <div className={`${viewToggle ? 'flex' : 'hidden'} absolute z-10 w-full`}>
                    {/* <ProductModal toggle={setToggleModal} tg={toggleModal}></ProductModal> */}
                    <div className='grid content-center h-screen bg-blueLogo/50 z-10 w-full'>
                        <div className={`sm:w-1/2 w-full mx-auto p-6 bg-white rounded-md shadow-md overflow-auto my-6 sm:my-0`}>
                            <h2 className="text-2xl font-semibold text-gray-700 capitalize">Detail Member</h2>
                            
                            {/* <form> */}
                                <div className="mt-4">
                                {/* nama, id, jmlh tx, referal code, jml cupon used, email, no hp */}
                                    <div className='text-left text-md'>
                                        <p><span className='font-bold'>ID :</span> {'8wqw87'}</p>
                                        <p><span className='font-bold'>Nama :</span> {'Nama member'}</p>
                                        {/* <p><span className='font-bold'>Alamat :</span> {'Alamat Pembeli'}</p> */}
                                        <p><span className='font-bold'>No.HP :</span> {'No hp member'}</p>
                                        <p><span className='font-bold'>Email :</span> {'email@gmail.com'}</p>
                                        <p><span className='font-bold'>Jumlah Transaksi :</span> {'20'}</p>
                                        <p><span className='font-bold'>Poin :</span> {'20'}</p>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    {/* <button onClick={()=>{}} className="px-4 py-2 mx-1 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Ubah ke Reseller</button>
                                    <button onClick={()=>{}} className="px-4 py-2 mx-1 leading-5 text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-gray-600">Hapus</button> */}
                                    <a onClick={()=>{setViewToggle(false)}} className="px-6 py-2 mx-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200" >Close</a>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
    )
  }