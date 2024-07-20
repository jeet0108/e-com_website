import React from 'react'
import { VscSend } from "react-icons/vsc";
import { BsQrCode } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";


function Footer() {
  return (
    <div className='bg-black w-full text-white py-8 pb-3'>
        <div className=' flex justify-around pb-6'>
            <div className='flex flex-col gap-1'>
                <div className='text-xl pb-2'>Exclusive</div>
                <div>Subscribe</div>
                <div>Get 10% off your first order</div>
                <div className='flex items-center'><input type="email" placeholder='Enter your Email' className='bg-black border-white border-2 rounded-md px-2 py-1'/>
                <button className=' relative right-8 text-xl'>
                    <VscSend />
                </button>
                </div>
            </div>
            <div>
                <ul className='flex flex-col gap-1'>
                    <li className=' text-xl pb-2'>Support</li>
                    <li>Rajkot,Gijarat</li>
                    <li>jeetsabhadiya387@gmail.com</li>
                    <li>+91 8866560921</li>
                </ul>
            </div>
            <div>
                <ul className='flex flex-col gap-1'>
                    <li className='text-xl pb-2'>Account</li>
                    <li><a href="">My Account</a></li>
                    <li><a href="">Login/Register</a></li>
                    <li><a href="">Cart</a></li>
                    <li><a href="">WishList</a></li>
                </ul>
            </div>
            <div>
                <ul className='flex flex-col gap-1'>
                    <li className=' text-xl pb-2'>Quick Link</li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Use</a></li>
                    <li><a href=""></a>FAQ</li>
                    <li><a href=""></a>Contact</li>
                </ul>
            </div>
            <div className=''>
                <div className=''>
                    <div className=' text-xl '>DownLoad App</div>
                    <BsQrCode className='text-6xl pt-2 '/>
                </div>
                <div className=''>
                    <ul className='flex gap-2 text-xl pt-3'>
                    <FiFacebook />
                    <FiTwitter />
                    <FaInstagram />
                    <FaLinkedinIn />
                    </ul>
                </div>
            </div>
            
        </div>
        <hr className='border-gray-800'/>
        <div className='flex  items-center justify-center pt-2 '>
            <div><FaRegCopyright /></div>
            <div className='pl-2'>Copyright 2024.All right reserved</div>
        </div>
        
    </div>
  )
}

export default Footer