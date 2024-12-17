import { AtomicResult, AtomicResultList } from "@coveo/atomic-react";
import React, { useEffect, useRef, useState } from "react";
import { ResultTemplateFunction } from "./ResultTemplateFunction";
import { useDispatch } from "react-redux";
import { DefaultTemplate } from "./DefaultTemplate";

const ResultSectionAtomic=()=>{
    const dispatch=useDispatch();
   const ele=0;
    return (
        <div className="Result-Section-Atomic " >
            <AtomicResultList template={(result)=>{
                return <DefaultTemplate result={result} ele={ele} dispatch={dispatch}/>
            }} display={"grid"} />
        </div>
    )
}


export default ResultSectionAtomic;



