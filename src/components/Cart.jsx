import React from 'react'
import Product from '../sections/Product'
import { Minus, Plus } from 'lucide-react'


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
export default function Cart() {
  return (
    <div className="w-full x-4 pt-4 pb-16 sm:pt-8 sm:pb-24 xl:pt-14">
    <div className="max-w-lg mx-auto w-full">
      <h2 className="sr-only">Order summary</h2>
      <div className="flow-root overflow-y-auto max-h-[650px] h-[430px] md:h-[500px]">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
          {Array.isArray(Product) && Product.length === 0 ? (
            <h1 className="text-3xl py-5">NO ITEM. ADD ITEMS</h1>
          ) : (Products.map((item, idx) => (
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
                      <p className="text-gray-900">Price:8500</p>
                    </div>
                    <div className="flex-none flex space-x-4">
                      <button
                        type="button"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                       
                      >
                       <Plus/>
                      </button>
                      <div className="flex border-l border-gray-300 pl-4">
                        <button
                          type="button"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          <Minus/>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
        <div className="flex justify-between border-t border-gray-200 text-gray-900 pt-6">
          <dt className="text-base">Total :</dt>
          <dd className="text-base">$ 88,000.00</dd>
        </div>
      </dl>
      <div className="w-full pt-5">
          <button className="bg-black w-full rounded-md py-3 text-white text-lg">     
              Checkout
          </button>
      </div>
    </div>
  </div>
  )
}
