import React from "react";
import { FcSearch, FcLike } from "react-icons/fc";
import { IoCartOutline, IoSearch, IoHeartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";


function Navbar() {
  return (
    <div>
      <div className="flex justify-between w-full px-48 bg-black">
        <div className=" text-white py-2 text-center w-full">
          Summer sale for all purchase and free delivery - 50%
          <a href="" className="pl-2 underline">
            ShopNow
          </a>
        </div>
        <div>
          <select
            name="language"
            id=""
            className="bg-black text-white py-2 outline-none rounded-none border-none "
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
      </div>
      <div className="flex w-full bg-white justify-between px-32 items-center py-2 shadow-md">
        <div className="  font-bold text-xl">PhoneWale</div>
        <div className="">
          <ul className=" flex justify-around gap-20 font-semibold">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Login</a></li>
          </ul>
        </div>
        <div className=" flex justify-around items-center gap-2">
          <form className=" w-full flex items-center">
            <input
              type="text"
              className=" border-2 px-2 w-64 py-2 rounded-md border-none bg-gray-200"
              placeholder=" What area you looking for ?"
            ></input>
            <button className=" relative right-8 ">
              <IoSearch className=" text-xl" />
            </button>
          </form>

          <div className=" flex items-center gap-5 font-bold text-2xl">
            <IoHeartOutline />
            <IoCartOutline />
            <MdOutlineAccountCircle />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
