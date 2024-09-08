import { MdArrowOutward } from "react-icons/md";


const Search = () => {
  return (
    <div className="flex mr-5 border-2 border-neutral-300 p-1 rounded-full font-sans z-[999]">
      <input type="text" placeholder="Ask for information" className="bg-transparent rounded-full focus:outline-none text-sm border-0 w-96 mx-4  pl-10 "/>
      <button type ="submit" className="bg-white text-white p-1 rounded-full w-10 h-10 flex justify-center items-center hover:bg-green-500 hover:rotate-90 hover:duration-300 hover:ease-in-out"><MdArrowOutward className="fill-black w-6 h-6 "/></button>
    </div>
  )
}

export default Search