import React, { useEffect, useState } from 'react'
import Product from '../sections/Product'
import { Delete, Minus, Plus, Trash, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { decrementItemQuantity, incrementItemQuantity, removeFromLocalStorageArray } from '../utils/Index'
export const calculateTotal =(cartitems)=>{
  return(
    cartitems && cartitems.reduce(
      (total, item)=>total + item.Price * (item.qty || 1),
      0
    ) || 0
  )
}

export default function Cart({setOpen, open}) {
  const [cartitems, setCart]= useState([])
  console.log(cartitems);
  useEffect(()=>{
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartLocalStorage)
  },[])
  
  return (
    <div className="w-full x-4 pt-4 pb-16 sm:pt-8 sm:pb-24 xl:pt-14">
    <div className="w-full">     
      <div className="flow-root overflow-y-auto max-h-[650px] h-[300px]">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
          {Array.isArray(cartitems) && cartitems.length === 0 ? (
            <h1 className="text-3xl py-5">NO ITEM. ADD ITEMS</h1>
          ) : (cartitems.map((item, idx) => (
              <li key={idx} className="py-6 flex space-x-6">
                <img
                  src={item.img}
                  alt=""
                  className="flex-none w-24 h-24 object-center object-cover bg-gray-100 rounded-md"
                />
                <div className="flex-auto">
                  <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                    <div className="flex-auto flex  flex-col justify-center text-sm font-medium space-y-1">
                      <h3 className="text-gray-600 text-xs">{item.name}</h3>
                      <p className="text-gray-900 flex items-center justify-between w-full">Price:50  </p>
                      <button 
                     onClick={()=>removeFromLocalStorageArray("cart", item.id)}
                      className='flex item-center text-red-600'><Trash size={20}/></button>
                    </div>
                    <div className="flex-none flex space-x-4">
                      <button
                        type="button"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={()=>incrementItemQuantity("cart", item.id)}
                      >
                       <Plus/>
                      </button>
                      <p>{item.qty}</p>
                        <button
                          type="button"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={()=>decrementItemQuantity("cart", item.id)}
                        >
                          <Minus/>
                        </button>
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
          <dd className="text-base">${calculateTotal(cartitems)}</dd>
        </div>
      </dl>
      <div className="w-full pt-5">
          <button
          onClick={()=>setOpen(!open)} 
          className="bg-black w-full rounded-md py-3 text-white text-lg">     
              <Link to='/Checkout'>Checkout</Link>
          </button>
      </div>
    </div>
  </div>
  )
}
