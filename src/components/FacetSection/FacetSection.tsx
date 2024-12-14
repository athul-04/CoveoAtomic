import { AtomicFacetManager, AtomicLayoutSection } from "@coveo/atomic-react"
import Facet from "./Facet"
import { bookType } from "../../controllers/controllers"
import React from 'react';

export const FacetSection=()=>{
    return (
        <>
            <AtomicLayoutSection section="facets">
                <AtomicFacetManager>
                    <Facet controller={bookType} title="Genres"></Facet>
                </AtomicFacetManager>
            </AtomicLayoutSection>
        </>
    )
}