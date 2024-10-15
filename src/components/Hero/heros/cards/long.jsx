
import base2 from "../../../../assets/images/blackcard.svg"
import img1 from "../../../../assets/swiper/1.jpg"
import img2 from "../../../../assets/swiper/2.jpg"
import img3 from "../../../../assets/swiper/3.jpg"
import img4 from "../../../../assets/swiper/4.jpg"
import img5 from "../../../../assets/swiper/5.jpg"
import img6 from "../../../../assets/swiper/6.jpg"
import img7 from "../../../../assets/swiper/7.jpg"
import bar from "../../../../assets/swiper/bar.png"


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../../../index.css';

// import required modules
import { Autoplay,Pagination, Navigation  } from 'swiper/modules';


const Long = () => {
  return (
    <><div className="flex justify-center">
     
    <div className="absolute mt-28 text-white">
    <Swiper
    gap={20}
    centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Pagination ,Navigation ]}
        className="mySwiper absolute top-14 left-6"
       
      >
        <SwiperSlide><img src={img1} /></SwiperSlide>
        <SwiperSlide><img src={img2} /></SwiperSlide>
        <SwiperSlide><img src={img3} /></SwiperSlide>
        <SwiperSlide><img src={img4} /></SwiperSlide>
        <SwiperSlide><img src={img5} /></SwiperSlide>
        <SwiperSlide><img src={img6} /></SwiperSlide>
        <SwiperSlide><img src={img7} /></SwiperSlide>
      </Swiper>
      <p className="absolute bottom-10 text-xs font-bold left-6">Androids in market have led to automatic loads with pins</p>
      <img src={bar} className="absolute w-32 h-12 bottom-0  "alt="bar" />
      <img src={base2} alt="base2" >
     
    </img>
    </div>
    </div>
    </>
  )
}

export default Long