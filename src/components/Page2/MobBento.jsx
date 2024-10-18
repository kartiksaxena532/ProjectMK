
import {FaArrowDown} from 'react-icons/fa'

const MobBento = () => {
  return (
    <div className='block md:hidden items-center mt-20   '>
   <div className="grid grid-rows-7 grid-cols-4  xl:gap-4 lg:gap-3 md:gap-2 gap-1  rounded-xl xl:mx-36 lg:mx-32 md:mx-32  xl:p-12 lg:p-8 md:p-4 p-2">
      <div className="col-span-3 bg-orange-500 rounded-full"></div>
      <div className="col-span-1 flex text-6xl border-orange-500 text-orange-500 rounded-full border-2 items-center justify-center ">
        <FaArrowDown />
      </div>
      <div className="col-span-2 rounded-full  border-2 border-purple-500 text-2xl lg:text-3xl xl:text-4xl text-purple-500 flex items-center justify-center">
        Kartik
      </div>
      <div className="col-span-2 rounded-full bg-purple-500 text-white flex text-2xl lg:text-3xl xl:text-4xl items-center justify-center ">
        Saxena
      </div>
      <div className="col-span-1 rounded-full bg-yellow-600 "></div>
      <div className="col-span-3 rounded-full border-2 text-bold text-xl font-yatra border-gray-400 flex items-center justify-center ">Spontaneously</div>
      <div className="col-span-2 rounded-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-white bg-teal-500 ">
        Making
      </div>
      <div className="col-span-1 rounded-full items-center border-2 border-blue-900 text-blue-900 justify-center flex  text-6xl ">
        {" "}
        <FaArrowDown className="flex -rotate-45" />
      </div>
      <div className="col-span-1 rounded-full bg-gray-400 "></div>
      <div className="col-span-1 flex text-6xl border-gray-500 text-gray-500 rounded-full border-2 items-center justify-center ">
        <FaArrowDown />
      </div>
      <div className="col-span-3 rounded-full border-2 border-orange-500 text-orange-500 flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl font-yatra">
        Landing Pages
      </div>
      <div className="col-span-2 rounded-full  bg-blue-500 flex items-center justify-center  ">
        
      </div>
      <div className="col-span-2  text-2xl lg:text-3xl xl:text-4xl bg-blue-500 text-white rounded-full flex items-center justify-center">
            Implements
      </div>
      <div className="col-span-3 grid grid-cols-2 gap-4">
        <div className="col-span-1 border-2 border-green-600 rounded-full flex items-center justify-center">Are</div>
        <div className="col-span-1 border-blue-500 border-2 rounded-full flex items-center justify-center font-yatra">Good</div>
      </div>
      <div className="cols-span-1 rounded-full bg-orange-500 flex items-center text-black justify-center">Enough?</div>
    </div>
    </div>
  )
}

export default MobBento