import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

export default function AddModul(props) {
    return (
        <div className='grid content-center h-screen bg-blueLogo/50 z-10 w-full'>
            <div className="sm:w-3/4 w-full mx-auto p-6 bg-white rounded-md shadow-md overflow-auto my-6 sm:my-0">
                <h2 className="text-2xl font-semibold text-gray-700 capitalize">TAMBAH MODUL</h2>
                
                <form>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-4">
                        <div>
                            <div className='my-3 text-left'>
                                <label className="text-gray-700" >Judul Modul</label>
                                <input id="username" type="text" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                            </div>
                            <div className='flex flex-row'>
                                <div className='my-3 mx-1 text-left'>
                                    <label className="text-gray-700" >Kategori Modul</label>
                                    
                                    <select  className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                                        <option value="Marketing">Marketing</option>
                                        <option value="Networking">Networking</option>
                                    </select>
                                </div>
                                <div className='my-3 mx-1 text-left'>
                                    <label className="text-gray-700" >Pemilik Modul</label>
                                    
                                    <select  className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                                        <option value="Owner">Owner</option>
                                        <option value="Reseller">Reseller</option>
                                        <option value="Umum">Umum</option>
                                    </select>
                                </div>
                            </div>
                            <div className='my-3 text-left'>
                                <label className="text-gray-700" >File Modul</label>
                                <input id="passwordConfirmation" type="file" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                            </div>
                        </div>
                        <div className='my-3 text-left'>
                            <label className="text-gray-700" >Deskripsi Modul</label>
                            <textarea className="w-full h-3/4 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" rows="5" cols="40" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <a onClick={()=>props.toggle(false)} className="px-6 py-2 mx-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200" >Close</a>
                        <button className="px-6 py-2 mx-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
  }