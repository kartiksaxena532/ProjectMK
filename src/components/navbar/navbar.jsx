import Search from "./searchbar/search"
import Logo  from "../../assets/images/Mk_Logo.png"
import { LuEqual } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex justify-between ring-white w-full place-items-center font-mons">
    <div className="flex md:justify-evenly md:gap-20">
      <button><LuEqual className="ml-2 w-8 h-8 hidden md:block " /></button>
        <div className="text-[#ffffff] flex items-center font-bold text-sm md:text-xl gap-2 tracking-wider"><img src={Logo} alt="Logo" className="w-8 h-8 rounded-full hover:rotate-12" />MayKreate</div>
        <button className="hover:underline underline-offset-4 hidden md:block">Showreel</button>
        <button className=" hover:underline underline-offset-4 hidden md:block">Bento Style</button>
        <button className="hover:underline underline-offset-4 hidden md:block">3D Style</button>
        <button className=" hover:underline underline-offset-4 hidden md:block">Contact Us</button>
    </div>
    <Search/>
    <button><LuEqual className="ml-20 w-8 h-8 md:hidden block justify-end" /></button>
    </div>
  )
}

export default Navbar