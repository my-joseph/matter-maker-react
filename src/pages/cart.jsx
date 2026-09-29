import { useCart } from "@/features/cart/context/CartContext";
import ShelfCard from "@/features/shelf-collection/ShelfCard";
import { getProductById } from "@/data/products";
import { div, h2 } from "motion/react-client";
import IconWrapper from "@/components/ui/IconWrapper";
import { Heart, ReceiptRussianRubleIcon, Trash } from "lucide-react";
import { motion } from "motion/react";
import { use, useEffect } from "react";

export default function Cart() {
  const { cartItem, setCartItem } = useCart();
  // const products = cartItem.map((item) => {
  //   return getProductById(item.id);
  // });
  const handleIncreaseBtn = (productId) => {
    setCartItem(
      (cartItem || []).map((item) => {
        return item.id == productId
          ? { id: item.id, quantity: item.quantity + 1 }
          : item;
      }),
    );
  };
  const handleDecreaseBtn = (productId) => {
    setCartItem(
      (cartItem || []).map((item) => {
        return item.id == productId
          ? { id: item.id, quantity: item.quantity - 1 }
          : item;
      }),
    );
  };

  const handleDeleteBtn = (productId) => {
    setCartItem((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const subTotal = cartItem.reduce((acc, { id }) => {
    const { basePrice, quantity } = getProductById(id);
    return acc + (basePrice || 0) * (quantity || 1);
  }, 0);

  const handleCheckoutBtn = () => {
    setCartItem([]);
    window.alert("Check out");
  };
  return (
    <div>
      <div className=" flex flex-col p-4">
        <div className=" flex justify-between items-center">
          <div className=" flex items-center gap-2">
            <input type="radio" />
            <label htmlFor="">ITEM (1)</label>
          </div>
          <IconWrapper icon={Heart} className=" w-5"></IconWrapper>
        </div>
        <ul className=" grid grid-cols-1 py-4 border-b">
          {cartItem.map((item) => {
            const product = getProductById(item.id);
            if (!product) console.log(" NO PD");
            return (
              <li
                key={product.id}
                className=" grid grid-cols-3 content-between py-4"
              >
                <div className=" col-span-1 flex justify-center items-center gap-4">
                  <input type="radio" />
                  <div className=" aspect-2/3 w-full overflow-hidden grid place-items-center">
                    <img
                      src={product.images.main}
                      alt=""
                      className=" w-full h-full"
                    />
                  </div>
                </div>
                <div className=" flex flex-col col-span-2 w-full h-full justify-between">
                  <div className=" flex flex-col">
                    <div className=" flex justify-between items-center">
                      <span className=" uppercase ">{product.name}</span>
                      <IconWrapper
                        icon={Trash}
                        className=" w-5 cursor-pointer"
                        onClick={() => handleDeleteBtn(product.id)}
                      ></IconWrapper>
                    </div>
                    <span className=" text-gray-500 font-light">S - PINK </span>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex gap-6">
                      <button
                        type="button"
                        onClick={() => handleDecreaseBtn(product.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => handleIncreaseBtn(product.id)}
                      >
                        +
                      </button>
                    </div>
                    <span>
                      {(product.basePrice * item.quantity).toLocaleString()}
                      <span className=" text-xs text-gray-500"> THB</span>
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className=" flex justify-between py-4">
          <span className=" text-xl font-semibold">SUBTOTAL</span>
          <span>
            <span className=" font-semibold">{subTotal.toLocaleString()}</span>{" "}
            THB
          </span>
        </div>
        <div className=" flex flex-col gap-4">
          <button
            onClick={() => handleCheckoutBtn()}
            type="submit"
            className=" uppercase flex justify-center items-center border py-4 font-semibold text-lg bg-black text-white
            "
          >
            Check out
          </button>
          <button
            type="button"
            className=" uppercase flex justify-center items-center border py-4 font-semibold text-lg"
          >
            continue shopping
          </button>
        </div>
      </div>
    </div>
  );
}
