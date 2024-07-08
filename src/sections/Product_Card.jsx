import React, { useEffect, useState } from "react";
import { Products } from "./Product"; // Assuming Products is imported correctly
import { Productwo } from "./Product2";

export default function Product_Card({ product }) {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const cartLocalStorage = JSON.parse(
      localStorage.getItem("cartList") || "[]"
    );
    setCartList(cartLocalStorage);
  }, []); 

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  const FindProductById = (id) => {
    if(id <= 10){
      return Products.find((item) => item.id === id);
    }
    return Productwo.find((item) => item.id === id);    
  };

  const AddtoCart = (id) => {
    const product = FindProductById(id);
    console.log(product);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isExisted = cart.some((item) => item.id === product.id);
    if (isExisted) {
      return console.log(`product is already in the cart`);
    }
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="flex flex-col h-[500px] mx-auto md:mx-0 gap-2 gap-y-5">
      <div className="bg-gray-100 ">
        <img
          src={product.img}
          alt=""
          className=" md:h-[300px] md:w-[220px] object-cover object-center w-[300px] h-[300px]"
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <p className="text-xs">{product.name}</p>
        <p className="text-xs text-gray-700">All sizes available</p>
        <p className="text-xs">${product.Price || 50}</p>
        <button
          onClick={() => AddtoCart(product.id)}
          className="bg-black text-white p-2 text-xs md:text-sm font-light"
        >
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
}
