import React from 'react'

 const Card =({
   imgsrc,
   imgalt,
   title,
   price

}) =>{
  return (
    <>
      
        
<div classname="flex items-center justify-center w-80">
    <div classname="w-full p-4">
        <div classname="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl ">
          
            <div classname="w-20">
                <img src={imgsrc} classname="object-cover object-center w-full" alt={imgalt}/>
            </div>
            <div classname="grid gap-10 ">


                <div>
                    <ul classname="flex flex-row items-center justify-center">
                        <li classname="mr-4 last:mr-0">
                            <span classname="block p-1 transition duration-300 ease-in border-2 border-gray-500 rounded-full">
                                <a href="#blue" classname="block w-6 h-6 bg-blue-900 rounded-full">
                                </a>
                            </span>
                        </li>
                        <li classname="mr-4 last:mr-0">
                            <span classname="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                                <a href="#yellow" classname="block w-6 h-6 bg-yellow-500 rounded-full">
                                </a>
                            </span>
                        </li>
                        <li classname="mr-4 last:mr-0">
                            <span classname="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                                <a href="#red" classname="block w-6 h-6 bg-red-500 rounded-full">
                                </a>
                            </span>
                        </li>
                        <li classname="mr-4 last:mr-0">
                            <span classname="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                                <a href="#green" classname="block w-6 h-6 bg-green-500 rounded-full">
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>


                <div classname="prod-title">
                <p classname="text-1xl font-bold text-gray-900 uppercase">
                    {title}
                </p>
                
            </div>
                <div classname="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                    <p classname="text-1Xl font-">
                    {price}
                    </p>


                    <button classname="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                        Add to cart
                    </button>


                </div>
            </div>
        </div>
    </div>
</div>

      
    </>
  )
}
export default Card

