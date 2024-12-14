import { buildFacet, buildResultList } from "@coveo/headless";
import { atomicEngine } from "../Engine/Engine";



export const bookType=buildFacet(atomicEngine, {
    options: { field: "book_type",numberOfValues:12,hasBreadcrumbs:true,facetId: 'book_type'}
})

export const resultList = buildResultList(atomicEngine);