import Robo from '../../../assets/images/hero.png'
import TransCard from '../card/TransCard'

const HeroRobo = () => {
  return (
    <div className='flex flex-col md:justify-center md:flex-row'>
    <div className="mt-[15rem] h-[87vh] w-[32vw] align-right">
    <img src={Robo} alt="Logo" className=" hidden md:block md:absolute -ml-22 transform -scale-x-100  scale-125 w-[35vw]  h-[70vh]" />
    <p className='hidden md:flex mix-blend-color-dodge justify-end rotate-90 mt-20 ml-56 text-3xl font-regular'>Beyond Imagination.</p>
</div>
<div className='hidden md:absolute md:flex md:bottom-20 md:right-80'>
<TransCard/>
</div>
</div>
  )
}

export default HeroRobo