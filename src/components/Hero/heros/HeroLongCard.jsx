import Long from "./cards/long"
import Green from "./cards/green"
import White from "./cards/white"
const HeroLongCard = () => {
  return (
    <div className=" h-[75vh] w-[17vw] ">
      <div className="flex flex-col justify-start items-center">
        <White/>
        <Green/>
        <Long/>
        </div>
    </div>
  )
}

export default HeroLongCard