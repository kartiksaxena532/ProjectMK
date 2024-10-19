import HeroLongCard from "./heros/HeroLongCard"
import HeroText from "./heros/HeroText"
import HeroRobo from "./heros/HeroRobo"

const Hero = () => {
  return (
    <>
    <div className="flex flex-col mt-[80vh] md:mt-0 md:flex-row h-[80vh] w-full items-center justify-center md:overflow-hidden font-mons">
     <div className="mr-10"><HeroLongCard/></div>
    <div><HeroText /></div>
    <div><HeroRobo/></div>
    </div>
    </>
  )
}

export default Hero