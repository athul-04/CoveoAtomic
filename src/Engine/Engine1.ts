import { buildSearchEngine,loadFieldActions,SearchEngine } from "@coveo/headless";


const FIELDS=[
    "book_name",
]

const registerAditionalFields=(searchEngine:SearchEngine)=>{
    const loadActions=loadFieldActions(searchEngine);
    searchEngine.dispatch(loadActions.registerFieldsToInclude(FIELDS));
    return searchEngine;

}


const engine=buildSearchEngine({
    configuration:{
        organizationId:"",
        accessToken:"",
        search:{
            pipeline:"",
            searchHub:"",
        },
    }
});

export const atomicEngine=registerAditionalFields(engine);

