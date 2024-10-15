import card from "../../../assets/SmallOulineHero.svg"
import image from "../../../assets/transcard.jpg"
import img1 from "../../../assets/swiper/1.jpg"
import img2 from "../../../assets/swiper/2.jpg"
import img5 from "../../../assets/swiper/5.jpg"
import img4 from "../../../assets/swiper/4.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination, Navigation  } from 'swiper/modules';
import '../../../index.css';

const TransCard = () => {
  return (
    <>
    <div className="w-56 h-64 rounded-xl px-8 backdrop-blur flex justify-center flex-col gap-2 items-center">
      <Swiper
        direction={'vertical'}
        autoplay={{
          delay: 1000,
        }}
        modules={[Autoplay,Pagination ,Navigation ]}
        className="h-1/2 w-1/2 absolute top-10 left-5"
      >
        <SwiperSlide><img src={image} alt="Logo" className=" w-1/2" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="Logo" className=" w-1/2 " /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="Logo" className=" w-1/2 " /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="Logo" className=" w-1/2 " /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="Logo" className=" w-1/2 " /></SwiperSlide>
      </Swiper>
      <p className=" text-sm font-bold tracking-wide absolute bottom-4">Multi-Sensor Humanoid<br></br>Robot For War</p>
      <img src={card} alt="Logo" className="absolute -z-[999] w-64 h-64 fill-white backdrop-blur-sm"/>
    </div>
     </>
  )
}

export default TransCard