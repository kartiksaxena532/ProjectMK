import Robo from '../../../assets/images/3d model_transparent_Craiyon.png'
import TransCard from '../card/TransCard'

const HeroRobo = () => {
  return (
    <div className='flex'>
    <div className="mt-[8rem]  h-[87vh] w-[32vw] align-right  ">
    <img src={Robo} alt="Logo" className=" absolute -ml-36 transform -scale-x-100 -z-999 scale-125 w-[40vw]  h-[40vw]" />
</div>
<div className='absolute flex bottom-20 right-60'>
<TransCard/>
</div>
</div>
  )
}

export default HeroRobo