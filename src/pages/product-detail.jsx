import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "@/data/products";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import IconWrapper from "@/components/ui/IconWrapper";
import { Heart, Plus, Share } from "lucide-react";
import { useCart } from "@/features/cart/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct);
  }, [id]);

  const { addToCart } = useCart();

  if (!product) {
    return <h1>Loading...</h1>;
  }

  const { name, basePrice, images = [] } = product;

  return (
    <>
      <div className=" min-h-screen">
        <div className=" md:h-screen overflow-hidden">
          <Swiper
            modules={[Mousewheel, FreeMode]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={"auto"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className=" h-full w-full"
          >
            {Object.values(product.images).map((url) => {
              return (
                <SwiperSlide>
                  <div className=" aspect-2/3 overflow-hidden h-full ">
                    <img src={url} alt="" className=" w-full h-full" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className=" w-full h-auto md:w-160 md:m-auto">
          <div className=" flex flex-col p-4">
            <div className=" flex justify-between">
              <h1 className=" block uppercase text-md font-semibold">{name}</h1>
              <div className=" flex gap-2 justify-end pl-4">
                <IconWrapper icon={Share} />
                <IconWrapper icon={Heart} />
              </div>
            </div>
            <span className=" text-sm font-semibold mt-1">
              {basePrice.toLocaleString()} THB
            </span>
            <div className=" flex gap-2 mt-2">
              <button
                type="button"
                className=" underline text-lg cursor-pointer"
              >
                S
              </button>
              <button
                type="button"
                className=" underline text-lg cursor-pointer"
              >
                M
              </button>
              <button
                type="button"
                className=" underline text-lg cursor-pointer"
              >
                L
              </button>
            </div>
            <div className=" flex flex-col justify-start items-center py-2">
              <button
                type="button"
                className=" flex justify-center items-center gap-1 self-start cursor-pointer"
              >
                <span>SIZE GUIDE</span>
                <IconWrapper icon={Plus} size={"sm"} />
              </button>
              <button
                type="button"
                className=" flex justify-center items-center gap-1 self-start cursor-pointer"
              >
                <span>FIND A STORE</span>
                <IconWrapper icon={Plus} size={"sm"} />
              </button>
            </div>
            <div className=" fixed bottom-0 left-0 right-0 z-20 flex justify-center items-center w-full p-4 md:p-0 md:static ">
              <button
                onClick={() => addToCart(id)}
                className=" flex justify-center items-center px-8 py-3 w-full bg-slate-50 border cursor-pointer"
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
