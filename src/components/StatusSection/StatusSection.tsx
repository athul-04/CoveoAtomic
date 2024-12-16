import { AtomicBreadbox, AtomicDidYouMean, AtomicLayoutSection, AtomicSortDropdown, AtomicSortExpression } from "@coveo/atomic-react";
import React from "react";


export const StatusSection=()=>{

    return (
        <div className="BreadBoxDiv">
            <div className="sortable">
                <AtomicSortDropdown >
                <AtomicSortExpression expression={"relevancy ascending"} label={"Relevance"} ></AtomicSortExpression>
                <AtomicSortExpression expression={"book_price_float ascending"} label={"Price (Low - High)"} ></AtomicSortExpression>
                <AtomicSortExpression expression={"book_price_float descending"} label={"Price (High - Low)"} ></AtomicSortExpression>
            </AtomicSortDropdown>
            </div>
        </div>
    )
}