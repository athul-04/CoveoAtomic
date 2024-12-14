import { AtomicBreadbox, AtomicDidYouMean, AtomicLayoutSection } from "@coveo/atomic-react";
import React from "react";


export const StatusSection=()=>{

    return (
        <div className="BreadBoxDiv">
            <AtomicLayoutSection section="status">
            <AtomicDidYouMean />
        </AtomicLayoutSection>
        </div>
    )
}