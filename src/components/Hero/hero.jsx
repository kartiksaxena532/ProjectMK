import HeroLongCard from "./heros/HeroLongCard"
import HeroText from "./heros/HeroText"
import HeroRobo from "./heros/HeroRobo"

const Hero = () => {
  return (
    <>
    <div className="flex flex-row h-[80vh] w-full items-center justify-center overflow-hidden">
     <div className="mr-10"><HeroLongCard/></div>
    <div><HeroText /></div>
    <div><HeroRobo/></div>
    </div>
    </>
  )
}

export default Hero