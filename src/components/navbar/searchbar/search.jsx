import { MdArrowOutward } from "react-icons/md";


const Search = () => {
  return (
    <div className=" border-2 border-neutral-300 p-1 rounded-full hidden md:flex font-mons">
      <input type="text" placeholder="What A.I. Can't.....We Do!" className="bg-transparent rounded-full focus:outline-none text-sm border-0 w-96 pl-12" />
      <button type="submit" className="bg-white text-white p-1 rounded-full w-10 h-10 flex justify-center items-center hover:bg-green-500 hover:rotate-90 hover:duration-300 hover:ease-in-out"><MdArrowOutward className="fill-black w-6 h-6 " /></button>
    </div>
  )
}

export default Search