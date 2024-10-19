import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="justify-between md:justify-start flex flex-row md:mt-0 -mt-40 md:gap-10 md:tracking-wider font-mons">
    <div className="flex border-2 border-neutral-300 rounded-full font-sans">
      <div className="bg-transparent rounded-full justify-between items-center pl-2 gap-16 md:gap-28 focus:outline-none  font-mons flex font-semibold text-xs md:text-sm border-0 ">Explore Below
          <MdArrowOutward className="fill-black p-2 flex hover:bg-green-500 text-white rounded-full bg-white  hover:ease-in-out w-10 h-10 hover:rotate-90 hover:duration-300 "/></div>
    </div>
    <div className="flex flex-row items-center gap-4">
      <hr className="w-[18vw] rounded-full ring-2 ring-fuchsia-100 "></hr><p className="font-bold text-[10px] md:text-xl tracking-widest ">The MayKreate</p>
    </div>
    </div>
  )
}

export default Footer