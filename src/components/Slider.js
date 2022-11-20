import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider({ images }) {
  return (
    <Swiper
    breakpoints={{
        576: {
          width: 576,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
        1020: {
          width: 1020,
          slidesPerView: 3,
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {images?.map((item, index) => (
        <SwiperSlide key={index}>
            <div>
            <img src={item} alt={index} />
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
