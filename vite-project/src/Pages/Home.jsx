import React from "react";
import Navbar from "../components/Navbar";
import photo from "../../public/photos/iphone1.jpg";
import { RiAppleLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex ">
        <div className="px-24 pt-14 border-r-2 w-96 ">
          <ul className="flex  flex-col gap-y-5  font-bold hover:text-gray-700">
            <li>
              <a href="">Apple Series</a>
            </li>
            <li>
              <a href="">Realme Phone</a>
            </li>
            <li>
              <a href="">Oppo Phone</a>
            </li>
            <li>
              <a href="">Vivo Phone</a>
            </li>
            <li>
              <a href="">Samsung S-series</a>
            </li>
            <li>
              <a href="">OnePlus Phone</a>
            </li>
            <li>
              <a href="">Others</a>
            </li>
            
          </ul>
        </div>
        <div className="w-full py-10 px-14">
          <div className="bg-black   flex justify-around ">
            <div className="w-1/2 py-14 px-36 ">
              <div className="flex items-center  ">
                <div>
                  <RiAppleLine className="text-white text-6xl " />
                </div>
                <div className="text-white text-2xl pl-2">iphone 14 series</div>
              </div>
              <div className="text-white text-6xl leading-tight">
                Up to 10% off Voucher
              </div>
              <div className="flex items-end pt-4">
                <div className="text-white text-xl  underline ">
                  <a href="">Shop Now</a>
                </div>
                <div>
                  <a href="">
                    <FaArrowRight className="text-white text-2xl pl-2 items-center" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-center ">
              <img src={photo} className="w-auto h-auto " alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default Home;
