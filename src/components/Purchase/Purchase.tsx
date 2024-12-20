import React, { useState } from "react";
import "./purchase.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/Store";
interface CartItem {
    id: string;
    pic: string;
    title: string;
    price: Number;
    count?: number; 
  }
export const Purchase=()=>{
    const total_price=useSelector((state:any)=>{
        var sum=0;
        state.cart.forEach((item:any)=>{sum+=item.price});
        sum=parseFloat(sum.toFixed(2));
        return sum;
    })

    const dispatch=useDispatch();

    const mapped_books:Map<string,CartItem>=useSelector((state:any)=>{
        const books=new Map<string,CartItem>();
        state.cart.forEach((item:any)=>{
            const existingItem=books.get(item.id);
            if(existingItem){
                books.set(item.id,{...existingItem,count:(existingItem.count ?? 0) + 1,price:existingItem.price+item.price})
            }
            else{
                books.set(item.id,{...item,count:1});
            }
        })
        return books;
    })
    console.log("mapped_Books",mapped_books);
    const returnCartItems=Array.from(mapped_books.values()).map((value, index)=>{
        return(
            <div className="ItemsAndMultipleDiv">
                <div className="Items-div-multiple-img">
                    <img src={value.pic} alt="" className="img-itemMultiple"/>
                </div>
                <div className="Items-div-multiple-title">
                    <p>{value.title}</p>
                </div>
                <div className="Items-div-multiple-count">
                    <p>{`${value.count} X`}</p>
                </div>
                <div className="Items-div-multiple-price">
                    <p>{String(value.price)}</p>
                </div>
            </div>
        )
    })
    const [closeBtn,setCloseBtn]=useState(false);
    const [errorContent,setErrorContent]=useState("");
    
    const errorPopUpHandler=()=>{
        setCloseBtn(!closeBtn);
    }
    const navigate=useNavigate();

    const PurchaseHandler=async()=>{
        setTimeout(()=>{
            setErrorContent("Purchase Finished")
            setCloseBtn(true);
            setTimeout(()=>{
                setCloseBtn(false);
                setErrorContent("");
                dispatch(cartActions.removeAll());
                navigate("/");
            },2000)
        },1000)
    }


    return (
        <div className="purchase-div">
            <Link to='/'  className="edit-cart ">Edit Cart</Link>
            <div>
                <h1 className="Confirm-Purchase">Confirm Purchase</h1>
            </div>
            <div className={closeBtn ? "error-div" : "error-div-close"}> 
                <span className="close" onClick={errorPopUpHandler}>x</span>
                <p>{errorContent}</p>
            </div>
            <div className="itemsInTheCart">
                    {returnCartItems}  
            </div>
            <div className="total-price-div">
                    <p>Total Price : <span className="total-price-span">{total_price}</span></p>
                    <a className="purchase-btn-a"  onClick={PurchaseHandler}>Purchase</a>
                    
            </div>
        </div>
    )
}

