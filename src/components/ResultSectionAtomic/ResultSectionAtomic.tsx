import { AtomicResult, AtomicResultList } from "@coveo/atomic-react";
import React from "react";
import { ResultTemplateFunction } from "./ResultTemplateFunction";

const ResultSectionAtomic=()=>{
    return (
        <div className="Result-Section-Atomic">
            <AtomicResultList template={ResultTemplateFunction} display={"grid"}/>
        </div>
    )
}


export default ResultSectionAtomic;



