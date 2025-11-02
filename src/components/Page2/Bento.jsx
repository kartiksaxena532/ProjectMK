import { useRef } from 'react';
import song from '../../assets/page2/song.mp3';
import Old from "../../assets/page2/old.png"
import Logo from "../../assets/page2/avatar.png"
import Young from "../../assets/page2/young.png"
import Logo1 from "../../assets/images/one.png"
import Logo2 from "../../assets/images/two.png"
import Logo3 from "../../assets/images/three.png"
import Iphone from "../../assets/images/Stop.png"
import DVA from "../../assets/images/Mk_Logo.png"
import Gif from "../../assets/images/Gif.mp4"
const Bento = () => {
  const audioRef = useRef(null);

  // Function to play the audio on hover
  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Function to pause and reset the audio on hover leave
  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to start
    }
  };
  return (

    <div className="hidden xl:px-48 lg:grid grid-cols-1 grid-rows-12 lg:grid-cols-4 lg:grid-rows-6 bg-dark p-8 gap-4">
      <div className="relative col-span-1 row-span-4 rounded-xl bg-blue-100 overflow-hidden">
        <h1 className="absolute font-bold top-4 left-4 mr-12 text-xl text-black">Branding <br /> Ready Designs!
        </h1>
        <img className="rounded-2xl absolute hover:-translate-y-4 -bottom-4 " src={Old} alt="old" />
      </div>
      <div className="grid  grid-rows-1 grid-cols-4 col-span-2 row-span-1 border overflow-hidden border-white/50 rounded-xl">
        <div className=" bg-red-100 text-black text-2xl text-center py-4 font-yatra rounded-bl-xl rounded-tl-xl">
          Logo <br></br>Design
        </div>
        <div className="bg-black-200 h-8"><img src={Logo1} className='-translate-y-5 object-fit'></img></div>
        <div className="bg-black-200 h-8"><img src={Logo2} className=' scale-105 object-fit'></img></div>
        <div className="bg-black-200 h-8 rounded-tr-xl rounded-br-xl"><img src={Logo3} className='-translate-y-4 object-fit'></img>
        </div>
      </div>
      <div className="relative bg-blue-500 col-span-1 row-span-2 rounded-xl overflow-hidden">
        <video
          loop
          autoPlay
          muted
          src={Gif}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute pt-12  bottom-4 left-4 flex flex-row items-center">
          <p className="text-xl px-4 text-center font-semibold text-white bg-blue-400 rounded-md">
            Custom Animations
          </p>
        </div>
      </div>
      <div className="relative bg-gradient-to-t from-green-100 via-yellow-100 to-pink-100 col-span-2 row-span-3  rounded-xl">
        <span className="absolute text-sm font-semibold text-black left-4 top-4 hover:text-black hover:text-lg">
          <a href="https://kartikdesign.netlify.app" className='text-blue-400 font-yatra underline animate-bounce' >
            Check Out My Portfolio !
          </a>
        </span>
        <span className="absolute font-mons items-center justify-center left-4 top-12 text-6xl  text-zinc-600 font-thick">
         Sky is our limit! <span className=' italic font-yatra' /> Fresh & Cool <span /><br></br> Brand Assets!
        </span>
        <span className="absolute  bottom-4 left-4 italic text-sm  text-black ">
          We{`'`}ve created a <span className='font-yatra text-xl italic'>Variety of Assets </span><br />for <span className='font-yatra text-xl italic'>different</span> brands {" "} with <span className='font-yatra text-xl italic'>quality</span> work under deadlines!
        </span>
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
        <p className="absolute text-xl  left-4 top-4 text-black ">
          Redefining <br />Website And <br>
          </br>Application Interface Design.
        </p>
        <button className="px-3 right-4 top-6 absolute  text-sm py-1 border-blue-500 text-blue-500 border rounded-2xl cursor-pointer hover:bg-blue-500 hover:text-white duration-700">
          {" "}
          有門{" "}
        </button>
        <img src={Young} className="absolute bottom-0 rounded-xl" alt="young" />
      </div>
      <div className="relative col-span-1 row-span-2 bg-blue-500 rounded-xl">
        <button className="absolute text-sm rounded-xl left-2 top-2 px-2 py-1 bg-white text-blue-500 hover:bg-red-400 hover:text-light duration-500 font-yatra" >Stickers</button>
        <img src={Iphone} width={120} className="mx-auto my-10 object-fit rounded-xl" alt="young" />
        <h1 className='absolute font-bold bottom-4 pl-16 italic text-xl text-center'>Sticker Design</h1>
      </div>
      <div className="relative items-center justify-center col-span-2 row-span-2 bg-green-400 rounded-xl">
        <img className="mx-auto justify-center items-center rounded-full m-3 h-48 w-48 hover:animate-spin" src={DVA} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} alt="young" />
        <p className="absolute top-4 left-6 text-xl italic font-yatra text-white font-semibold">Here Is Something..</p>
        <p className="absolute bottom-4 right-6 text-xl italic font-yatra text-white font-semibold">Hover To Hear!</p>
        <audio ref={audioRef} src={song} />
      </div>
    </div>
  )
}

export default Bento