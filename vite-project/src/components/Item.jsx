import React from 'react';
import {Link, NavLink} from "react-router-dom"  


const Item = ({props}) => {
    return (
        <>
        <div className='w-full flex justify-evenly'>
            <div className=' p-3 border rounded-lg shadow-md w-64'>
                    <a href={`${props.id}`}>
                    <img onClick={window.scrollTo(0, 0)} className=' aspect-square rounded-md'  src={props.image} alt="" />
                </a>
                <p className="text-lg font-semibold mb-2">{props.name}</p>
                <div className="item-prices flex justify-between items-center">
                    <div className="item-price-new text-xl font-bold text-green-600">
                        ₹ {props.new_price}
                    </div>
                    <div className="item-price-old text-lg line-through text-gray-500">
                        ₹ {props.old_price}
                    </div>
                </div>
            </div>
        </div>        
    </>    
    )
}

export default Item;
