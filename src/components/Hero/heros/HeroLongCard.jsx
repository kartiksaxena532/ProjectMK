import Long from "./cards/long"
import Green from "./cards/green"
import White from "./cards/white"
const HeroLongCard = () => {
  return (
    <div className="md:ml-0 ml-6 h-[70vh] w-[15vw] ">
      <div className="flex flex-col justify-start items-center">
        <White/>
        <Green/>
        <Long/>
        </div>
    </div>
  )
}

export default HeroLongCard