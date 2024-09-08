import { MdArrowOutward } from "react-icons/md";


const Search = () => {
  return (
    <div className="flex mr-5 border-2 border-neutral-300 p-1 rounded-full font-sans">
      <input type="text" placeholder="Ask for information" className="bg-transparent rounded-full focus:outline-none text-md border-0 w-96 mx-4  pl-10 "/>
      <button type ="submit" className="bg-white text-white p-1 rounded-full w-12 h-12 flex justify-center items-center hover:bg-green-500 hover:rotate-90 hover:duration-150"><MdArrowOutward className="fill-black w-8 h-8 "/></button>
    </div>
  )
}

export default Search