
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Bento from './Bento';
import MobBento from './MobBento';
gsap.registerPlugin(useGSAP);


const Page2 = () => {
  const container = useRef();
  useGSAP(() => {
    // use selectors...
    gsap.to(".tape", { 
        transform:'translate(-200%)',
        duration:5,
        repeat:-1,
        ease:"none",
   });
  },
  { scope: container }
); // <-- scope for selector text (optional)
  return (
    <div className=" h-[100vh] mt-9" ref={container}>
      <div className="bg-green-500 w-full flex-col flex-wrap md:py-3 h-16 text-3xl items-center flex md:text-5xl overflow-hidden gap-10">
      <p className='tape font-yatra'>Ahilate according to the flow of the project in the new day!</p>
        <p className='tape font-yatra'>Ahilate according to the flow of the project in the new day!</p>
        <p className='tape font-yatra'>Ahilate according to the flow of the project in the new day!</p>
        <p className='tape font-yatra'>Ahilate according to the flow of the project in the new day!</p>
        <p className='tape font-yatra'>Ahilate according to the flow of the project in the new day!</p>
        <p className='tape font-yatra'>Ahilate according to the flow of the project in the new day!</p>
        </div>
        <Bento/>
        <MobBento/>
    </div>
  )
}

export default Page2