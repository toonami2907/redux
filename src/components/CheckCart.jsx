import React from 'react'

const Products = [
    { name: "Plain Grey Unisex Hoodie", img: "/Rectangle 53 (1).png" },
    { name: "Sky Stock Blue Jean For Men", img: "/Rectangle 53.png" },
    {
      name: "Osc Signature MENS Quality  R-Neck V-Neck T-Shirts Long Sleeve",
      img: "/WIDE-LEG WOOL TROUSERS 1 (1).png",
    },
    {
      name: "Dark Grey Summer Short And Beach Wear",
      img: "/WIDE-LEG WOOL TROUSERS 2 (2).png",
    },]
export default function CheckCart() {
  return (
    <div>
        {Array.isArray(Products) && Products.map((item, idx)=> (
            <li key={idx} className="py-6 flex space-x-6">
            <img
              src={item.img}
              alt=""
              className="flex-none w-24 h-24 object-center object-cover bg-gray-100 rounded-md"
            />
            <div className="flex-auto">
              <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                <div className="flex-auto flex flex-col justify-center text-sm font-medium space-y-1">
                  <h3 className="text-gray-600 text-xs">{item.name}</h3>
                  <p className="text-gray-900 text-sm">Price: $20</p>
                </div>
              </div>
            </div>
          </li>
        ))}
    </div>
  )
}
