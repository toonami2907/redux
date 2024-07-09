import React from "react";
import Filters from "../components/Filters";
import Product_Card from "./Product_Card";

export const Products = [
  {
    id: 1,
    qty: 1,
    Price: 50,
    name: "Plain Grey Unisex Hoodie",
    img: "/Rectangle 53 (1).png",
  },
  {
    id: 2,
    qty: 1,
    Price: 50,
    name: "Sky Stock Blue Jean For Men",
    img: "/Rectangle 53.png",
  },
  {
    id: 3,
    qty: 1,
    Price: 50,
    name: "Osc Signature MENS Quality  ",
    img: "/WIDE-LEG WOOL TROUSERS 1 (1).png",
  },
  {
    id: 4,
    qty: 1,
    Price: 50,
    name: "Dark Grey Summer Short",
    img: "/WIDE-LEG WOOL TROUSERS 2 (2).png",
  },
  {
    id: 5,
    qty: 1,
    Price: 50,
    name: "Men's Short Sleeve Round",
    img: "/WIDE-LEG WOOL TROUSERS 2.png",
  },
  {
    id: 6,
    qty: 1,
    Price: 50,
    name: "Reclaimed Vintage men ",
    img: "/Group 957.png",
  },
  {
    id: 7,
    qty: 1,
    Price: 50,
    name: "Plain Grey Unisex Hoodie",
    img: "/Rectangle 53 (1).png",
  },
  {
    id: 8,
    qty: 1,
    Price: 50,
    name: "Reclaimed Vintage men  ",
    img: "/Rectangle 53.png",
  },
  {
    id: 9,
    qty: 1,
    Price: 50,
    name: "Plain Grey Unisex Hoodie",
    img: "/WIDE-LEG WOOL TROUSERS 1.png",
  },
  {
    id: 10,
    qty: 1,
    Price: 50,
    name: "Plain Grey Unisex Hoodie",
    img: "/WIDE-LEG WOOL TROUSERS 2 (1).png",
  },
];
export const Filtersitems = [
  { name: "New arrivals" },
  { name: "Under 5k" },
  { name: "Jeans" },
  { name: "T-shirts" },
  { name: "Shorts" },
  { name: "Formals" },
  { name: "Hats" },
];

export default function Product() {
  return (
    <div>
      <Filters />
      <div className="lg:px-10 px-2">
        <h1 className="text-2xl font-bold">All items</h1>
        <p className="text-xs">245 items</p>
        <div className="py-5">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  grid-cols-2 sm:grid-cols-2 h-full">
            {Products.map((item, idx) => (
              <Product_Card product={item} key={idx} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 py-10 ">
          <p className=" text-xs md:text-sm text-gray-700">
            You have viewed 70 of 245 products
          </p>
          <button className="py-2 px-5 border-2 border-gray-700  hover:bg-black hover:text-white bg-gray-50 text-black">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
