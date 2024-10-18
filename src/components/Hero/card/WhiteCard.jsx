import card from "../../../assets/Group 1 (7).png"
import Logo  from "../../../assets/images/Mk_Logo.png"
const WhiteCard = () => {
  const currentDate = new Date();
  
  // Custom date format: dd-MMM-yyyy
  const formattedDate = `${currentDate.getDate()}.${currentDate.toLocaleString('default', { month: 'short' })}.${currentDate.getFullYear()}`;
  return (
    <div>
      <div className="flex mt-10 md:mt-4">
      <div className="absolute ml-4 mt-2">
      <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full hover:rotate-12" />
      <p className="text-gray-600 ml-28 text-xs">
      {formattedDate}
      </p>
      <div className="rounded-full w-28 h-10 ring-black ring-1 my-2 text-sm text-black items-center flex justify-center hover:ring-2 hover:font-bold">
        New Article
      </div>
      <p className="text-gray-600 font-semibold text-md -ml-0.2 leading-none tracking-wide mt-4">
        How Latest Technical <br/>Advancedment Are<br/>Changing The World
      </p>
      </div>
      <img src={card} alt="Logo" className="w-52 h-52 md:w-54 md:h-52" />
      <div className=" absolute ml-24 -mt-6 bg-green-500 w-28 h-10 rounded-full justify-center items-center flex text-black hover:text-white hover:ring-green-300 hover:ring-2 ">Read More</div>
       </div>
    </div>
  )
}

export default WhiteCard