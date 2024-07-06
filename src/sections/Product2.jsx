import React from 'react'
import Product_Card from './Product_Card';
import Filters from '../components/Filters';

export const Products = [
    { name: "Plain Grey Unisex Hoodie", img: "/Rectangle 53 (6).png" },
    { name: "Sky Stock Blue Jean For Men", img: "/Rectangle 53 (7).png" },
    {
      name: "Osc Signature MENS Quality  R-Neck V-Neck T-Shirts Long Sleeve",
      img: "/WIDE-LEG WOOL TROUSERS 2 (1).png",
    },
    {
      name: "Dark Grey Summer Short And Beach Wear",
      img: "/WIDE-LEG WOOL TROUSERS 1 (2).png",
    },
    { name: "Men's Short Sleeve Round Neck T-Shirt ", img: "/WIDE-LEG WOOL TROUSERS 1 (1).png" },
    { name: "Reclaimed Vintage men loose fit trousers in plain black", img: "/Group 957 (1).png" },
    { name: "Plain Grey Unisex Hoodie", img: "/Rectangle 53 (5).png" },
    { name: "Reclaimed Vintage men loose fit jean in vintage mid blue", img: "/Rectangle 53 (4).png" },
    {
      name: "Plain Grey Unisex Hoodie",
      img: "/WIDE-LEG WOOL TROUSERS 1.png",
    },
    {
      name: "Plain Grey Unisex Hoodie",
      img: "/Rectangle 53 (3).png",
    },
  ];
export default function Product2() {
  return (
    <div>
    <Filters />
    <div className="lg:px-10 px-2">
      <h1 className="text-2xl font-bold">All items</h1>
      <p className="text-xs">245 items</p>
      <div className="py-5">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-10 grid-cols-1 sm:grid-cols-2 h-full">
          {Products.map((item, idx) => (
            <Product_Card product={item} key={idx} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 py-10 ">
        <p className=" text-xs md:text-sm text-gray-700">You have viewed 70 of 245 products</p>
        <button className="py-2 px-5 border-2 border-gray-700  hover:bg-black hover:text-white bg-gray-50 text-black">
          Load More
        </button>
      </div>
    </div>
  </div>
  )
}
