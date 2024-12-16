import { AtomicLayoutSection, AtomicSearchBox, AtomicSearchBoxQuerySuggestions } from "@coveo/atomic-react"
import React from 'react';
export const SearchSection=()=>{
    return (
        <>
            <div className="searchLayoutDiv">
                <AtomicLayoutSection section="search" className="searchLayoutSection">
                    <AtomicSearchBox>
                        <AtomicSearchBoxQuerySuggestions></AtomicSearchBoxQuerySuggestions>
                    </AtomicSearchBox>
                </AtomicLayoutSection>
            </div>
        </>
    )
}