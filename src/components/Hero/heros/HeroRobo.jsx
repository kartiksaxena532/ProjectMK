import Robo from '../../../assets/images/3d model_transparent_Craiyon.png'
import TransCard from '../card/TransCard'

const HeroRobo = () => {
  return (
    <div className='flex'>
    <div className="mt-[4rem] h-[91vh] w-[38vw] align-right ">
    <img src={Robo} alt="Logo" className="w-full h-full transform -scale-x-100 -z-999" />
</div>
<div className=' absolute flex bottom-20 right-60'>
<TransCard/>
</div>
</div>
  )
}

export default HeroRobo