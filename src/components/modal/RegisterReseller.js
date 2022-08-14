import { useState } from 'react'
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaTicketAlt } from "react-icons/fa";

export default function RegisterReseller(props) {
    return (
        <div className='grid content-center h-screen bg-blueLogo/50 z-10 w-full px-3'>
        <div className="flex flex-col w-full mx-auto max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
            <div className="flex justify-end">
                <button onClick={()=>props.toggle(false)} className="text-md text-gray-700" >X</button>
            </div>
            <div className="self-center text-lg text-gray-600">
                Ayo Bergabung Menjadi
            </div>
            <div className="self-center text-3xl font-bold text-gray-600">
                Reseller MetaFranchise
            </div>
            <div className="mt-8">
                <form action="#" autoComplete="off">
                    <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <FaUserAlt className='fill-gray-600'/>
                            </span>
                            <input type="text" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Nama Lengkap"/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <FaEnvelope className='fill-gray-600'/>
                            </span>
                            <input type="password" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Alamat Email"/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <FaPhoneAlt className='fill-gray-600'/>
                            </span>
                            <input type="text" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Nomor HP / Whatsapp"/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <FaTicketAlt className='fill-gray-600'/>
                            </span>
                            <input type="text" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Masukan Kode Referal"/>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Daftar Sekarang
                        </button>
                    </div>
                    {/* <div className="flex items-center justify-between my-4">
                        <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
                        <span className="text-xs text-gray-800 uppercase hover:underline">ATAU</span>
                        <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
                    </div>
                    <div className="flex w-full">
                        <button type="submit" className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Hubungi Whatsapp Kami
                        </button>
                    </div> */}
                </form>
            </div>
        </div>
</div>
    )
  }