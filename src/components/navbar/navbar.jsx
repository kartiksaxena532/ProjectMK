import Search from "./searchbar/search"
import Logo  from "../../assets/images/Mk_Logo.png"
import { LuEqual } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex justify-between ring-white w-full place-items-center">
    <div className="flex justify-evenly gap-20">
      <button><LuEqual className=" ml-2 w-8 h-8" /></button>
        <div className="text-[#ffffff] flex items-center font-bold text-md gap-2 tracking-wider"><img src={Logo} alt="Logo" className="w-8 h-8 rounded-full hover:rotate-12" />Project MK</div>
        <button className="hover:underline underline-offset-4">Home</button>
        <button className=" hover:underline underline-offset-4">About Us</button>
    </div>
    <Search/>
    </div>
  )
}

export default Navbar