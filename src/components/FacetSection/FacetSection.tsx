import { AtomicFacetManager, AtomicLayoutSection } from "@coveo/atomic-react"
import Facet from "./Facet"
import { bookType, fileTypeFacet } from "../../controllers/controllers"
import React from 'react';

export const FacetSection=()=>{
    console.log(bookType.state.values);
    return (
        <>
            <AtomicLayoutSection section="facets">
                <AtomicFacetManager>
                    <Facet controller={bookType} title="My Facet"></Facet>
                </AtomicFacetManager>
            </AtomicLayoutSection>
        </>
    )
}