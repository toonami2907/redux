import React from 'react'
import Hero from './sections/Hero'
import Product from './sections/Product'

export default function App() {
  return (
    <div className='flex flex-col gap-2'>
      <Hero/>
      <Product/>
    </div>
  )
}
