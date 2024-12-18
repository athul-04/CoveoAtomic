import React, { useEffect, useState } from "react";
import { SearchSection } from "../SearchSection/SearchSection";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/Store";
import { Link } from "react-router-dom";

export const Navbar=()=>{
    const [clicked,setClicked]=useState(false);
    const dispatch=useDispatch();
    const itemsInCart=useSelector((state: any)=>state.cart.length);
    const currState=useSelector((state:any)=>state.cart);
    const total_price=useSelector((state:any)=>{
        var sum=0;
        state.cart.forEach((item:any)=>{sum+=item.price});
        sum=parseFloat(sum.toFixed(2));
        return sum;

    })
    useEffect(()=>{
        if(currState.length==0)setClicked(false);
        
    },[currState.length])
    
    const displayCartItems=(e:any)=>{
        if(currState.length>0)setClicked(!clicked);
        console.log("currently there are ",currState.length," Items");
    }

    const removeItemsFromCart=(id:string)=>{
        dispatch(cartActions.removeItem({id:id}))
        console.log("currently there are ",currState.length," Items");

    }
    const list_items=currState.map((item:any)=>{
        return (
            <li className="cart-items-li">
                    <div className="cart-items-li-container">
                        <div>
                            <img src={item.pic} alt="" className="cart-items-img" />
                        </div>
                        <div className="cart-items-li-name">
                            <p>{item.title}</p>
                        </div>
                        <div className="cart-items-li-price">
                            <p>{item.price}</p>
                        </div>
                        <div className="cart-items-remove-btn-div">
                            <button className="cart-items-remove-btn" onClick={()=>removeItemsFromCart(item.id)}>-</button>
                        </div>
                    </div>
                </li>
        )
    })

    
    


    return (
        <div className="logo-search">
            <div className="logoClass">
                <img src="/file.png" alt="" className="logo"/>
            </div>
            <SearchSection />
            <div className="cartClass">
                <img src="/cart.png" alt="" className="cartImage" onClick={displayCartItems} /><span className="itemsInCart">{itemsInCart}</span>
                <div className={clicked ?"cart-items":"cart-items-display-none"}>
                <ul className="cart-items-ul">
                    {list_items}
                </ul>
                <div className="total-price-div">
                    <p>Total Price : <span className="total-price-span">{total_price}</span></p>
                    <Link className="purchase-btn"  to="/purchase">Purchase</Link>
                    
                </div>
            </div>
            </div>
            
          </div>
    )
}