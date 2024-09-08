import HeroLongCard from "./heros/HeroLongCard"
import HeroText from "./heros/HeroText"
import HeroRobo from "./heros/HeroRobo"

const Hero = () => {
  return (
    <>
    <div className="flex flex-row gap-10 h-[80vh] w-full items-center justify-center">
     <div><HeroLongCard/></div>
    <div><HeroText /></div>
    <div><HeroRobo/></div>
    </div>
    </>
  )
}

export default Hero