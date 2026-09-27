import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import ShelfCard from "./ShelfCard";

export default function ShelfCollection({ slug, banner, products }) {
  return (
    <>
      <div key={slug} className=" h-auto w-full">
        <div>
          <div className=" relative h-banner-screen border-b">
            <div className=" h-full w-full grid place-items-center overflow-hidden ">
              {banner.video ? (
                <video
                  playsInline
                  autoPlay
                  loop
                  muted
                  src={banner.video}
                  className=" w-full h-full object-cover "
                ></video>
              ) : (
                <img
                  src={banner.image}
                  className=" w-full h-full object-cover "
                ></img>
              )}
            </div>
            <div className=" flex justify-center items-center w-full absolute z-20 bottom-0 my-16 ">
              <motion.button
                whileHover={{ opacity: 0.7 }}
                className=" flex justify-center items-center bg-white border px-8 py-2 uppercase opacity-50  cursor-pointer"
              >
                Buy Now
              </motion.button>
            </div>
          </div>

          <Swiper
            modules={[Mousewheel, FreeMode]}
            spaceBetween={0}
            slidesPerView={"auto"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            mousewheel={{ forceToAxis: true }}
          >
            {products.map((product) => (
              <SwiperSlide className=" min-w-fit h-fit">
                <ShelfCard key={product.id} {...product}></ShelfCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
