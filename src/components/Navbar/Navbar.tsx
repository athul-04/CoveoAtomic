import React, { useEffect } from "react";
import { SearchSection } from "../SearchSection/SearchSection";
import { useSelector } from "react-redux";

export const Navbar=()=>{
    
    const itemsInCart=useSelector((state: any)=>state.cart.length);
    const currState=useSelector((state:any)=>state.cart);

    useEffect(()=>{
        console.log(currState)
    },[currState.length])
    return (
        <div className="logo-search">
            <div className="logoClass">
                <img src="/file.png" alt="" className="logo"/>
            </div>
            <SearchSection />
            <div className="cartClass">
                <img src="/cart.png" alt="" className="cartImage"/><span className="itemsInCart">{itemsInCart}</span>
            </div>
          </div>
    )
}