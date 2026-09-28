import { GlobalNavbar } from "@/features/navigation/";
import Homepage from "@/pages/homepage";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "@/pages/product-detail";
export default function App() {
  return (
    <>
      <GlobalNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<h1> 404 Not found </h1>} />
      </Routes>
    </>
  );
}
