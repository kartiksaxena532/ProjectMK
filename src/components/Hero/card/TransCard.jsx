import card from "../../../assets/SmallOulineHero.svg"
import image from "../../../assets/transcard.jpg"
const TransCard = () => {
  return (
    <>
    <div className="w-56 h-64 rounded-xl backdrop-blur flex justify-center flex-col gap-2 items-center">
      <div className="rounded-xl w-48 h-28 mx-auto items-center flex justify-center overflow-hidden ring-1 ring-indigo-100"> <img src={image} alt="Logo" className=" translate-y-8 " /></div>
      <p className=" text-md font-bold tracking-wide">Multi-Sensor Humanoid<br></br>Robot For War</p>
      <img src={card} alt="Logo" className="absolute -z-[999] w-64 h-64 fill-white backdrop-blur-sm"/>
    </div>
     </>
  )
}

export default TransCard