import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-row items-center gap-10 tracking-wider">
    <div className="flex border-2 justify-start border-neutral-300 p-1 w-1/5 rounded-full font-sans">
      <p className="bg-transparent rounded-full px-4 mr-28 focus:outline-none items-center flex font-semibold text-sm border-0 w-40 ">Explore Now</p>
      <div className="bg-white text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-green-500 rotate-90 hover:duration-300 hover:ease-in-out py-1"><MdArrowOutward className="fill-black w-6 h-6 "/></div>
    </div>
    <div className="flex flex-row items-center gap-4">
      <hr className="w-[18vw] rounded-full ring-2 ring-fuchsia-100 "></hr><p className="font-bold text-xl tracking-widest">The MK Company</p>
    </div>
    </div>
  )
}

export default Footer