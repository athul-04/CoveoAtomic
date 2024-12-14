import { AtomicLayoutSection, AtomicSearchBox } from "@coveo/atomic-react"
import React from 'react';
export const SearchSection=()=>{
    return (
        <>
            <div className="searchLayoutDiv">
                <AtomicLayoutSection section="search" className="searchLayoutSection">
                    <AtomicSearchBox />
                </AtomicLayoutSection>
            </div>
        </>
    )
}