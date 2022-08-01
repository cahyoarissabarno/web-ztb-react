import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Image from 'next/image'
// import axios from 'axios'
// import Link from 'next/link'

export default function AddProduct(props) {
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
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-4">
                        <div>
                            <div className='my-3'>
                                <label className="text-gray-700" >Nama Produk</label>
                                <input id="username" type="text" onChange={(e)=>setName(e.target.value)} value={name} className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                            </div>
                            <div className='my-3'>
                                <label className="text-gray-700" >Harga</label>
                                <input id="password" type="password" onChange={(e)=>setPrice(e.target.value)} value={price} className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                            </div>
                            <div className='my-3'>
                                <label className="text-gray-700" >Kategori Produk</label>
                                
                                <select onChange={(e)=>setCategory(e.target.value)} value={category} className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className='my-3'>
                                <label className="text-gray-700" >Gambar Produk</label>
                                <input id="passwordConfirmation" type="file" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                            </div>
                        </div>
                        <div className='my-3'>
                            <label className="text-gray-700" >Deskripsi Produk</label>
                            <textarea className="w-full h-3/4 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" rows="5" cols="40" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <a onClick={()=>props.toggle(false)} className="px-6 py-2 mx-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200" >Close</a>
                        <button onClick={()=>{addProduct(); props.refetch()}} className="px-6 py-2 mx-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">{props.state}</button>
                    </div>
                {/* </form> */}
            </div>
        </div>
    )
  }