import { Facebook, Instagram } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-gray-100 mt-2 px-5 py-10 md:px-10'>
      <section className='grid grid-cols-2  md:grid-cols-3 gap-3 gap-y-5 lg:grid-cols-4'>
        <div className='flex flex-col gap-2'>
          <h1 className="text-2xl LinkStyles font-['unbounded-bold'] text-black ">TIMBU</h1>
          <div className='text-xs text-gray-600 flex flex-col gap-2 lg:gap-5 leading-relaxed'>
            <p>We breathe life into pre-loved garments, transforimng them into timeless expressions of styles that echps whispers of the past.</p>
            <p>Welcome to TIMBU, a place where fashion has a heart, and your story unfolds with every attire you put on .</p>
          </div>
        </div>
        <ul className='flex flex-col pl-10 lg:pl-0 gap-4 md:text-sm text-xs  font-bold text-gray-600 '>
          <li className='font-["unbounded-bold"] text-black'>Shop</li>
          <li>Women</li>
          <li>Men</li>
          <li>Unisex</li>
        </ul>
        <ul className='flex flex-col gap-4 md:text-sm text-xs font-bold text-gray-600 '>
          <li className='font-["unbounded-bold"] text-black'>Customer support</li>
          <li>FAQs</li>
          <li>Shippings</li>
          <li>Returns</li>
          <li>Help and Contacts</li>
        </ul>
        <ul className='flex flex-col gap-4 md:text-sm text-xs font-bold text-gray-600 '>
          <li className='font-["unbounded-bold"] text-black'>About HIMBU</li>
          <li>The story</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </section>
      {/* ICONS */}
      <ul className='mt-5 flex gap-5'>
       <li className='flex text-black items-center gap-2'> <Instagram fill='black' size={30} color='white'/> <span>TIMBU_ng</span></li>
       <li className='flex text-black items-center gap-2'> <Facebook fill='blue' size={25} color='blue'/> <span>TIMBU_ng</span></li>
      </ul>
    </div>
  )
}

export default Footer