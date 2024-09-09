import WhiteCard from '../card/WhiteCard'

const HeroText = () => {
  return (
    <div className="flex flex-col ring-2 h-[75vh] w-[35vw] justify-between">
      <div className="flex flex-col items-start gap-4">
      <p className="font-regular text-sm">This Is The Future</p>
      <hr className="w-[15vw] rounded-full ring-2 ring-fuchsia-100"></hr>
    </div>
     <p className='text-7xl font-thin'> Discover how <br/><div className='flex flex-row -mb-20 ring-3 ring-white'>technology<p className="bg-green-500 text-white rounded-full w-16 h-16 hover:bg-white rotate-90"></p></div> <br/>have come so far <br/>By Klectra.
      </p>
      <div className=''>
<WhiteCard/>
</div>
    </div>
  )
}

export default HeroText