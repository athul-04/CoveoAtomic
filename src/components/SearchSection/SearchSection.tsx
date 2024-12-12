import { AtomicLayoutSection, AtomicSearchBox } from "@coveo/atomic-react"
import React from 'react';
export const SearchSection=()=>{
    return (
        <>
            <AtomicLayoutSection section="search">
                <AtomicSearchBox/>
            </AtomicLayoutSection>
        </>
    )
}