import CategoryList from '../../components/ecommerce/Category'
import NavbarEcommerce from '../../components/ecommerce/Navbar'
import ProductList from '../../components/ecommerce/ProductList'
import Carousel from '../../components/ecommerce/Carousel'
// import axios from 'axios'
// import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HomeShop() {
  const menu = [
    {title: 'Home', link: '/'},
    {title: 'Shop', link: '/shop'},
    {title: 'Owner', link: '/owner'},
    {title: 'Reseller', link: '/reseller'},
    {title: 'Event', link: '/event'},
    {title: 'About', link: '/about'},
  ]

  const categories = [
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
  ]

  const allData = [
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  ]

  // const [allData, setAllData] = useState(false)

  // const getAllData = async () =>{
  //   axios.get('/api/admin/administrator/product/10/1')
  //   .then((result) => {
  //       setAllData(result.data)
  //       // console.log(result.data)
  //   }).catch((err) => {
  //       console.log(err)
  //   });
  // }
  
  // useEffect(()=>{
  //   getAllData()
  //   // console.log(allData)
  // },[allData])

  return (
    <>
      <NavbarEcommerce menu={menu}/>
      <div className='pt-14'>
        <Carousel/>
      </div>
      <div className='my-5'>
        <div className='bg-blueLogo p-3'>
          <div className="container mx-auto my-5 bg-white py-3 px-5 rounded-xl text-left">
            <h4 className="text-2xl font-bold">Kategori Produk</h4>
            <CategoryList categories={categories}/>
          </div>
        </div>
        <div className="container mx-auto my-5 text-left">
          <h4 className="text-2xl font-bold mx-5">Semua Produk</h4>
          <ProductList product={allData}/>
        </div>
      </div>
    </>
  )
}