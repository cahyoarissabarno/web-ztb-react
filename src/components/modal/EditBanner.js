import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Image from 'next/image'
// import axios from 'axios'
// import Link from 'next/link'

export default function EditBanner(props) {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    // const [status, setStatus] = useState('')
    // console.log(props.data.name)
    const addProduct = async () =>{
        if (name!=''&&category!=''&&price!='') {
            let data = {name, category, price, status:1}
            
            // if(props.state == 'Add'){
            //     axios.post('/api/admin/administrator/product', data)
            //     .then((result) => {
            //         props.toggle(false) 
            //     }).catch((err) => {
            //         console.log(err)
            //     });
            // } else if(props.state =='Edit'){
            //     axios.put(`/api/admin/administrator/product/${id}`, data)
            //     .then((result) => {
            //         props.toggle(false) 
            //     }).catch((err) => {
            //         console.log(err)
            //     });
            // }
        }
        else { console.log('required') }
    }

    // useEffect(()=>{
    //     setId(props.data ? props.data.id : '')
    //     setName(props.data ? props.data.name : '')
    //     setCategory(props.data ? props.data.category : '')
    //     setPrice(props.data ? props.data.price : '')
    // },[props.data])

    return (
        <div className='grid content-center h-screen bg-blueLogo/50 z-10 w-full'>
            <div className="sm:w-3/4 w-full mx-auto p-6 bg-white rounded-md shadow-md overflow-auto my-6 sm:my-0">
                <h2 className="text-2xl font-semibold text-gray-700 capitalize">{props.state} Product</h2>
                
                {/* <form> */}
                    <div className="mt-4">
                        <div className='my-3 text-left'>
                            <label className="text-gray-700">Upload banner</label>
                            <div className='flex flex-row mt-2'>
                                <input id="passwordConfirmation" type="file" className="w-5/6 px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                <button onClick={()=>{addProduct(); props.refetch()}} className="w-1/6 px-4 py-2 mx-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Upload</button>
                            </div>
                        </div>
                        <div className='w-full flex flex-wrap'>
                            <div className='w-1/3 flex flex-row p-2 rounded-md border'>
                                <div className='w-4/6'>
                                    <img src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/8/13/a2cdbfc5-51d7-4bd1-8f2d-ebf072caa882.jpg.webp?ect=3g'/>
                                </div>
                                <div className='w-2/6 flex items-center justify-center'>
                                    <button className='mx-2 bg-red-500 text-gray-50 font-bold py-1 px-2 rounded-lg shadow-lg text-sm'>Hapus</button>
                                </div>
                            </div>
                            <div className='w-1/3 flex flex-row p-2 rounded-md border'>
                                <div className='w-4/6'>
                                    <img src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/8/13/a2cdbfc5-51d7-4bd1-8f2d-ebf072caa882.jpg.webp?ect=3g'/>
                                </div>
                                <div className='w-2/6 flex items-center justify-center'>
                                    <button className='mx-2 bg-red-500 text-gray-50 font-bold py-1 px-2 rounded-lg shadow-lg text-sm'>Hapus</button>
                                </div>
                            </div>
                            <div className='w-1/3 flex flex-row p-2 rounded-md border'>
                                <div className='w-4/6'>
                                    <img src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/8/13/a2cdbfc5-51d7-4bd1-8f2d-ebf072caa882.jpg.webp?ect=3g'/>
                                </div>
                                <div className='w-2/6 flex items-center justify-center'>
                                    <button className='mx-2 bg-red-500 text-gray-50 font-bold py-1 px-2 rounded-lg shadow-lg text-sm'>Hapus</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <a onClick={()=>props.toggle(false)} className="px-6 py-2 mx-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200" >Close</a>
                    </div>
                {/* </form> */}
            </div>
        </div>
    )
  }