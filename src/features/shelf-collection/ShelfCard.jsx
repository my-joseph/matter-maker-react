import IconWrapper from "@/components/ui/IconWrapper";
import { Heart } from "lucide-react";
import { motion } from "motion/react";

export default function ShelfCard({ name, basePrice, images = {} }) {
  return (
    <>
      <article className=" flex flex-col max-w-84.5 h-125 border-r border-b">
        <a
          href=""
          className=" grid relative place-items-center aspect-2/3 overflow-hidden w-full h-full border-b"
        >
          <motion.img
            whileHover={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className=" absolute top-0 left-0 right-0 z-10"
            src={images.main}
            alt=""
          />
          <motion.img
            whileHover={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className=" absolute top-0 left-0 right-0"
            src={images.front}
            alt=""
          />
        </a>
        <div className=" flex flex-col p-2">
          <div className=" flex justify-between items-center">
            <h3 className=" text-xs font-light uppercase">{name}</h3>
            <IconWrapper icon={Heart} size={"sm"}></IconWrapper>
          </div>
          <span className="text-xs font-light uppercase mb-4">
            {basePrice.toLocaleString()} THB
          </span>
        </div>
      </article>
    </>
  );
}
