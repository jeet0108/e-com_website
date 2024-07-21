import React from "react";
import Home from "../Pages/Home";
import Item from "./Item.jsx";
import Footer from "./Footer.jsx";
import iphone from '/photos/iphone.jpg'
import iphone1 from '/photos/iphone1.jpg'
import Category from "./Category.jsx";


const new_collection = [
    {
        id: 1,
        name: 'iphone 13',
        image: iphone1,
        new_price: '$20.00',
        old_price: '$30.00',
    },
    {
        id: 2,
        name: 'iphone 12',
        image: iphone,
        new_price: '$25.00',
        old_price: '$35.00',
    },
    {
        id: 3,
        name: 'iphone 14 Pro',
        image: iphone,
        new_price: '$25.00',
        old_price: '$35.00',
    },
    {
        id: 1,
        name: 'iphone 13',
        image: iphone1,
        new_price: '$20.00',
        old_price: '$30.00',
    },
    {
        id: 2,
        name: 'iphone 12',
        image: iphone,
        new_price: '$25.00',
        old_price: '$35.00',
    },
    // {   
    //     id: 3,
    //     name: 'iphone 14 Pro',
    //     image: iphone,
    //     new_price: '$25.00',
    //     old_price: '$35.00',
    // }
];

function NewCollections() {
    return (
        <>
            
            <Home />
            <div className="new-collections py-1 pb-10 bg-gray-50" id="new-collection">
                <h1 className="text-4xl font-bold text-center mb-8">NEW COLLECTIONS</h1>
                <hr className="border-t-2 border-gray-300 mb-8" />
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {new_collection.map((item, idx) => {
                        return (
                            <Item
                                key={idx}
                                props={item}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-center p-2">
                <div className="bg-gray-800 w-68 p-2 rounded-md">
                    <div className="flex justify-center items-center text-xl text-gray-200">
                        <a href="" className="flex justify-center">View All Products</a>
                    </div>
                </div>
            </div>
            <Category/>
            <Footer/>
        </>
    );
}

export default NewCollections;