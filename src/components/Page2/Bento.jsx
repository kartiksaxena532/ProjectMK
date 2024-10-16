
    import Old from "../../assets/page2/old.png"
    import Avatar1 from "../../assets/page2/avatar.png"
    import Logo from "../../assets/page2/avatar.png"
    import Avatar2 from "../../assets/page2/avatar.png"
    import Young from "../../assets/page2/young.png"
    import plus from "../../assets/page2/plus.webp"
    import Iphone from "../../assets/page2/mockip.webp"
    import DVA from "../../assets/page2/1.webp"
    const Bento = () => {
      return (
        
      <div className="hidden xl:px-48 lg:grid grid-cols-1 grid-rows-12 lg:grid-cols-4 lg:grid-rows-6 bg-dark p-8 gap-4">
      <div className="relative col-span-1 row-span-4 rounded-xl bg-blue-100 overflow-hidden">
        <h1 className="absolute font-semibold top-4 left-4 mr-12 text-xs text-black">
          Develop together with science-based mentah health experts
        </h1>
        <img className="rounded-2xl absolute -scale-x-100 -bottom-16" src={Old} alt="old" />
      </div>
      <div className="grid  grid-rows-1 grid-cols-4 col-span-2 row-span-1 border border-white/50 rounded-xl">
        <div className=" bg-red-100 text-red-100 rounded-bl-xl rounded-tl-xl">
          .
        </div>
        <div className="bg-yellow-200 text-yellow-200">.</div>
        <div className="bg-blue-600 text-blue-600">.</div>
        <div className="bg-green-500  text-green-500 rounded-tr-xl rounded-br-xl ">
          .
        </div>
      </div>
      <div className="relative bg-blue-500 col-span-1 row-span-2 rounded-xl">
        <h1 className="absolute  left-4 flex text-6xl top-4">200+</h1>
        <div className="absolute pt-12  bottom-4 left-4 flex flex-row items-center">
          <img
            className="bg-yellow-200 rounded-full"
            src={Old}
            width={20}
            height={20}
            alt="old"
          />
          <img 
            className="bg-red-200 rounded-full"
            src={Old}
            width={20}
            height={20}
            alt="old"
          />
          <img 
            className="bg-blue-200 rounded-full"
            src={plus}
            width={30}
            height={30}
            alt="plus"
          />
          <p className="text-xs px-1">
            threapist avalible for personal threapist
          </p>
        </div>
      </div>
      <div className="relative bg-gradient-to-t from-green-100 via-yellow-100 to-pink-100 col-span-2 row-span-3  rounded-xl">
        <span className="absolute text-xs font-semibold text-black left-4 top-4 hover:text-black hover:text-lg">
          <a href="https://kartikdesign.netlify.app" >
          Design Language
          </a>
        </span>
        <h1 className="absolute mt-3 font-yatra items-center justify-center left-4 top-12 text-5xl  text-zinc-600 font-thin">
          Meets <br /> AI for Your <br /> Inner Balance
        </h1>
        <span className="absolute  bottom-4 left-4  text-xs  text-black ">
          Develop together with <br /> science based mental health <br />{" "}
          experts
        </span>
        <img
          className="top-10 right-32 absolute"
          src={Avatar1}
          width={70}
          height={70}
          alt="Avatar1"
        />
        <img
          className="top-8 right-16 absolute"
          src={Avatar2}
          width={70}
          height={70}
            alt="Avatar2"
        />

        <img
          src={Logo}
          width={50}
          height={50}
          className="absolute bottom-4
          right-4"
            alt="Logo"
        />
      </div>
      <div className="relative col-span-1 row-span-4 rounded-xl bg-blue-100">
        <p className="absolute text-xs  left-4 top-4 text-black ">
          Harmony <br /> Redefined, <br />
          by AI
        </p>
        <button className="px-1 right-4 top-6 absolute  text-xs py-1 border-blue-500 text-blue-500 border rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white duration-700">
          {" "}
          BALANCE{" "}
        </button>
        <img src={Young} className="absolute bottom-0" alt="young" />
      </div>
      <div className="relative col-span-1 row-span-2 bg-blue-500 rounded-xl">
        <button className="absolute text-xs rounded-xl left-2 top-2 px-2 py-1 bg-white text-blue-500 hover:bg-red-400 hover:text-light duration-500" >Top Rated App</button>
        <h1 className="absolute right-4 top-6 text-4xl" >4.8</h1>
        <img src={Iphone} width={120} className="absolute bottom-0 right-0" alt="young" />
      </div>
      <div className="relative items-center justify-center col-span-2 row-span-2 bg-green-400 rounded-xl">
          <img className="mx-auto justify-center items-center" src={DVA} width={200 } height={200} alt="young" />
      </div>
    </div>
      )
    }
    
    export default Bento