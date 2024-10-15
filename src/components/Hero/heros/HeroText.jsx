import WhiteCard from '../card/WhiteCard'
import { MdArrowOutward } from "react-icons/md";
const HeroText = () => {
  return (
    <div className="flex flex-col h-[75vh] w-[38vw] justify-between">
      <div className="flex flex-col items-start ">
      <p className="font-regular text-sm my-1 tracking-wider">This Is The Future</p>
      <hr className="w-[15vw] rounded-full ring-fuchsia-100"></hr>
    </div>
     <p className='text-6xl font-thin tracking-normal'> Discover how <br/><div className='flex flex-row -mb-16 gap-2 '><div className='ring-white ring-1 px-2 rounded-full font-normal py-3'>technology</div><p className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center hover:bg-white animate-spin"><MdArrowOutward className="fill-black w-12 h-12 "/></p></div> <br/>have come so far <br/>By Klectra.
      </p>
      <div className='flex justify-start'>
<WhiteCard/>
</div>
    </div>
  )
}

export default HeroText