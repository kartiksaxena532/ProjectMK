import WhiteCard from '../card/WhiteCard'
import { MdArrowOutward } from "react-icons/md";
const HeroText = () => {
  return (
    <div className="flex flex-col h-[50vh] md:h-[75vh] w-full md:w-[38vw] justify-between font-bold">
      <div className="flex flex-col items-start ">
        <p className="font-regular text-sm my-1 tracking-wider font-mons">The MyKreate Showcase Pages</p>
        <hr className="w-full md:w-[16vw] rounded-full ring-fuchsia-100"></hr>
      </div>
      <div className='text-3xl md:text-6xl md:mt-2  tracking-normal font-mons'>Crafting And<br /><div className='flex flex-row -mb-9 md:-mb-16 gap-2 '>

        <div className='ring-green-700 ring-2 px-2 rounded-full font-normal md:py-3 flex items-center'>
          Implementing
        </div>
      <div className=" md:w-20 md:h-20 flex items-center rounded-full  ">
        <MdArrowOutward className="animate-spin rounded-full p-2 md:p-3 hover:bg-white bg-green-500 fill-black w-8 h-8  md:w-20 md:h-20 " /></div>
        </div>
         <br />Dream Designs<br />To Realities.
      </div>
      <div className='flex justify-start '>
        <WhiteCard />
      </div>
    </div>
  )
}

export default HeroText