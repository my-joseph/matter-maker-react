import { GlobalNavbar } from "@/features/navigation/";
import Homepage from "@/pages/homepage";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "@/pages/product-detail";
import Cart from "@/pages/cart";
import { CartProvider } from "@/features/cart/context/CartContext";

export default function App() {
  return (
    <>
      <CartProvider>
        <GlobalNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<h1> 404 Not found </h1>} />
        </Routes>
      </CartProvider>
    </>
  );
}
