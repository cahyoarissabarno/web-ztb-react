// import Image from "next/image"; 

export default function CategoryList(props) {
  return (
    <div className="flex flex-wrap">
        {props.categories.map((val, i)=>{
            return (
                <div key={i} className="flex inline mx-auto items-center m-1 sm:p-2 p-1 rounded-full shadow-lg overflow-hidden bg-blueLogo hover:bg-gray-900">
                    <img src={`${val.image}`} className="object-cover sm:h-14 h-10 rounded-full relative" />
                    <div className="m-2 text-center">
                        <a href="#" className="block text-gray-100 sm:text-lg text-xs md:px-4 sm:px-3 px-2 font-bold">{val.title}</a>
                    </div>
                </div>
            )
        })}
    </div>
  )
}