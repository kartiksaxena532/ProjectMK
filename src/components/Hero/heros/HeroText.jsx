import WhiteCard from '../card/WhiteCard'
import { MdArrowOutward } from "react-icons/md";
const HeroText = () => {
  return (
    <div className="flex flex-col ring-2 h-[75vh] w-[38vw] justify-between">
      <div className="flex flex-col items-start gap-4">
      <p className="font-regular text-sm mt-1">This Is The Future</p>
      <hr className="w-[15vw] rounded-full ring-2 ring-fuchsia-100"></hr>
    </div>
     <p className='text-7xl font-thin'> Discover how <br/><div className='flex flex-row -mb-20  gap-2 '><div className='ring-white ring-1 px-2 rounded-full  font-normal'>technology</div><p className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center hover:bg-white rotate-90 "><MdArrowOutward className="fill-black w-12 h-12 "/></p></div> <br/>have come so far <br/>By Klectra.
      </p>
      <div className=' flex justify-center'>
<WhiteCard/>
</div>
    </div>
  )
}

export default HeroText