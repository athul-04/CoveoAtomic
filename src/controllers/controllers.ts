import { buildFacet } from "@coveo/headless";
import { atomicEngine } from "../Engine/Engine";


export const fileTypeFacet = buildFacet(atomicEngine, {
    options: { field: 'filetype'}
});

export const bookType=buildFacet(atomicEngine, {
    options: { field: "book_type"}
})