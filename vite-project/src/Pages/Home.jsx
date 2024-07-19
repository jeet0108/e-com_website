import React from 'react'
import Navbar from '../components/Navbar'
import photo from '../../public/photos/iphone.jpg'

function Home() {
  return (
    <>
    <Navbar/>
    <div className='flex'>
        <div className='px-20 pt-14 border-r-2 w-fit '>
            <ul className= 'flex  flex-col gap-y-5 font-bold'>
                <li><a href="">Woman's fashion</a></li>
                <li><a href="">Men's fashion</a></li>
                <li><a href="">Electronics</a></li>
                <li><a href="">Home & Lifestyle</a></li>
                <li><a href="">sports & Outdoor</a></li>
                <li><a href="">Beauty Products</a></li>
            </ul>
        </div>
        <div className='p-10 flex w-full '>
            <div className=' bg-black flex w-full justify-around'>
                <div className='text-white p-10'>iphone 15 series</div>
                <div className='w-60 '><img src={photo} alt="" /></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home