import { Link } from "react-router-dom";

export default function ProductList(props) {
  const product = {image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
//   console.log(props.product)  
  return (
    <div className="grid md:grid-cols-5 grid-cols-2 gap-px my-2">
        {props.product && props.product.map((val, i)=>{
            return (
                // <Link key={val.id} to={`/shop/product/${val.id}`}>
                <Link key={val.id} to={`${val.link}`}>
                    <a>
                        <div className="w-full mx-auto overflow-hidden bg-white hover:bg-gray-100 outline outline-1 outline-gray-200">
                            <div className='object-cover m-5 h-36 relative'>
                                {/* <Image layout='fill' objectFit='cover' src={`${product.image}`} className='h-1/2'/> */}
                                <img src={`${product.image}`} />
                            </div>
                            <div className="pb-5 px-5">
                                <span className="block text-gray-900 md:text-base text-sm font-medium">{val.name}</span>
                                <span className="mt-1 md:text-base text-sm font-bold text-yellow-500">Rp. {val.price}</span>
                            </div>
                        </div>
                    </a>
                </Link>
            )
        })}
    </div>
  )
}