import { buildFacet } from "@coveo/headless";
import { atomicEngine } from "../Engine/Engine.ts";


export const fileTypeFacet = buildFacet(atomicEngine, {
    options: { field: 'book_name'}
});