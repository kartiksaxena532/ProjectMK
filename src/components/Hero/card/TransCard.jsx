import card from "../../../assets/SmallOulineHero.svg"

const TransCard = () => {
  return (
    <div className="flex w-56 h-64 rounded-xl backdrop-blur-sm">
      <div className="rounded-xl w-48 h-28 mt-12 mx-auto bg-zinc-800 opacity-30 items-center flex justify-center "></div>
      <img src={card} alt="Logo" className="absolute -z-99 w-64 h-64 fill-white " />
    </div>
  )
}

export default TransCard