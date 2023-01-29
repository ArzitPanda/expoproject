import React from 'react'

const Card = () => {
  return (
    <div className="bg-gray-100 w-full h-40 rounded-lg my-4 flex relative">
        <div className="bg-red-200 w-36 h-full relative rounded-lg">
                    <div className="rounded-full absolute z-5 h-10 w-10 bg-purple-600 flex items-center justify-center bottom-2 left-2">
                        <div className="rounded-full  z-5 h-8 w-8 bg-white"></div>
                    </div>
                <img src="https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg"  alt="hello" className='w-full h-full object-cover rounded-lg'/>

        </div>

        <div className="flex flex-col ml-6 gap-y-4 bg-gray-200 h-5/6 w-2/4 px-2 py-4 my-auto rounded-xl text-md text-purple-900">
        
                <label>name: <span>spleder plus</span></label>
                <label>hourly rate <span>100</span></label>
                <label>owned by : <span>bidyadhar pattnaik</span></label>

            
        </div>
        <button href="#_" class="absolute inline-flex bottom-0 mx-2 my-2 right-0 items-center justify-center px-10 h-16 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
<span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span class="relative">Rent now</span>
</button>

    </div>
  )
}

export default Card