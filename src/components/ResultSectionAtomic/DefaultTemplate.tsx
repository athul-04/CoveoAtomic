import { AtomicResultImage, AtomicResultLink, AtomicResultSectionBottomMetadata, AtomicResultSectionExcerpt, AtomicResultSectionTitle, AtomicResultSectionVisual, AtomicResultText } from "@coveo/atomic-react";
import { Result } from "@coveo/headless";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, cartActions } from "../Store/Store";



interface cartItemStruct{
    id: string,
    pic:string,
    title:string
}

interface childrenProps{
    result:Result,
    ele:Number,
    dispatch:AppDispatch
}


export const DefaultTemplate: React.FC<childrenProps> = (props) => {
    console.log("props are :", props);
    const {dispatch} = props;
    const result=props.result;
    var image_url=result.raw.book_image as string;
    // console.log(result.title)
    if (image_url) {
        image_url="	https://books.toscrape.com"+image_url.slice(5);
        
    }
    else image_url="";
    // console.log(image_url);

    var TemplateResult=result.title as string;
    if(TemplateResult.length>0) {
        let pos=TemplateResult.indexOf("| Books to Scrape - Sandbox");
        TemplateResult=TemplateResult.slice(0,pos);
    }
    if(TemplateResult.length>55) {
        TemplateResult=TemplateResult.slice(0,55)+"...";
    }

    
    const cartAddHandler=(e:any,result:Result,name:string,image_url:string) => {
        const newCartItem:cartItemStruct = {
            id: result.uniqueId,
            pic: image_url,
            title: name,
        }
        console.log(newCartItem);
        dispatch(cartActions.addItem(newCartItem))
    }
    
    return (
      <div  onClick={(e)=>e.stopPropagation()}>
        <AtomicResultSectionVisual >
        <div className="result-image-default-div" style={resultImageDefaultDiv}>
            <img className="result-image-default" src={image_url} alt=""  style={resultImage}/>
        </div>
        </AtomicResultSectionVisual >

        <div className="pa">
            <p style={resultTitle}><a href={result.clickUri} target="_blank" rel="noopener noreferrer" style={resultTitle}>{TemplateResult}</a> </p>
        </div>
        <div style={resultBottomSection}>
            <AtomicResultText style={contentColor} field="book_type" />
            <AtomicResultText style={contentColor} field="book_price"/>

        </div>
        <div style={addToCart} onClick={(e)=>{e.stopPropagation()}}>
            <button style={cartButton} onClick={(e)=>cartAddHandler(e,result,TemplateResult,image_url)}>Add to cart</button>
        </div>
      </div>
    );
  };

  const resultImageDefaultDiv={
    width: "100%",
    marginRight: "auto",
}
const resultImage={
    height:"20em",
    display: "block",
    marginLeft: "auto",
    marginRight:"auto",
}
const resultTitle={
    paddingTop:"1em",
    textAlign:"center" as const,
    color:"#333333",
}
const resultBottomSection={
    marginTop:"1em",
    display:"flex",
    justifyContent:"space-around",
}

const contentColor={
    color:"#666666",
    fontWeight:"bold",
}

const cartButton={
    backgroundColor:"red",
    textAlign:"center" as const,     
}
const addToCart={
    textAlign:"center" as const,     
    marginTop:"1em",
    zIndex:"1",
    height:"5em",

}