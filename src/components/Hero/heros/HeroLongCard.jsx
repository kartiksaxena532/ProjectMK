import base1 from "../../../assets/E1smallOuline.svg"
import base0 from "../../../assets/EsmallOutlineHero.svg"
import base2 from "../../../assets/E2SmallOuline.svg"

import { motion } from "framer-motion"


const HeroLongCard = () => {
  return (
    <div className=" h-[75vh] w-[17vw] ">
      <div className="flex flex-col  justify-start items-center">
       <img src={base0} alt="base0" className="absolute mt-28"/>
       <img src={base1} alt="base1"  className="absolute mt-12 "/>
        <img src={base2} alt="base2" className="absolute "/>
        </div>
    </div>
  )
}

export default HeroLongCard