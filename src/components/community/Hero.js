import Image from "next/image"
export default function Hero(props) {
  return (
    <>
      <div className="container max-w-none px-14 flex flex-col py-4 mx-auto space-y-6 lg:h-[37.5rem] lg:py-16 lg:flex-row lg:items-center bg-blueLogo">
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <Image layout="fill" className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo"/>
        </div>
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-14 lg:order-2">
                <h1 className="text-3xl font-bold tracking-wide text-gray-300 lg:text-5xl">
                  {props.title}
                </h1>
                <p className="mt-7 text-gray-200">
                  {props.caption}
                </p>
                <div className="mt-8">
                    <a href="#" className="block px-3 py-2 font-semibold text-center text-blueLogo transition-colors duration-200 transform bg-gray-300 rounded-md lg:inline hover:bg-gray-700 hover:text-gray-300">
                      Bergabung dengan kami
                    </a>
                </div>
            </div>
        </div>
    </div>
</>
  )
}