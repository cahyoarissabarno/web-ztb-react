// import Image from "next/image"; 

export default function CategoryList(props) {
  return (
    <div className="flex flex-wrap">
        {props.categories.map((val, i)=>{
            return (
                <div key={i} className="max-w-xs mx-auto overflow-hidden bg-white">
                    <div className="object-cover m-5 h-28 relative">
                        <img src={`${val.image}`} />
                    </div>
                    <div className="pb-5 px-5 text-center">
                        <a href="#" className="block text-gray-900 md:text-base text-sm font-medium">{val.title}</a>
                    </div>
                </div>
            )
        })}
    </div>
  )
}