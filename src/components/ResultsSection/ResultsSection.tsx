
import React from "react";

import ResultList from "./ResultList";

import { resultList } from "../../controllers/controllers";
import { resultTemplatesManager } from "./ResultTemplatesManager";

export const ResultsSection=()=>{
    return (
        <>
            <ResultList controller={resultList}  resultTemplatesManager={resultTemplatesManager} />
        </>
    )
}