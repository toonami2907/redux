import { Heart } from 'lucide-react'
import React from 'react'

export default function Product_Card({product}) {
  return (
    <div className='flex flex-col mx-auto md:mx-0 gap-2 gap-y-5'>
      <div className='relative  bg-gray-100 md:h-[300px] md:w-[220px] w-[300px]  h-[350px] '>
        <img src={product.img} alt="" className='absolute top-0 w-full h-full' />
        <button className='absolute bottom-1 bg-white/85 right-1 p-2 font-light'><Heart/></button>
      </div>
      <div className='flex flex-col gap-1'>
      <p className='text-sm w-[250px] md:w-[220px]'>{product.name}</p>
      <p className='text-xs text-gray-700'>All sizes available</p>
      <p className='text-xs'>$8,500</p>
      </div>
    </div>
  )
}
