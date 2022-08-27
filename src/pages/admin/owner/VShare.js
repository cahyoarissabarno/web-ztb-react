import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import Sidebar from '../../../components/admin/Sidebar'
// import Table from '../../components/admin/Table'
// import ProductModal from '../../components/admin/ProductModal'

export default function OwnerVShare() {
    const [toggleModal, setToggleModal] = useState(false)
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
                                        VShare
                                    </h2>
                                </div>
                                <div className="text-end md:mt-0 mt-7 w-full">
                                    <form className="w-full justify-center">
                                        <input type="text" id="&quot;form-subscribe-Filter" className="rounded-lg shadow-xl border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="search here .."/>
                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }