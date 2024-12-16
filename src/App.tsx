import React, { useEffect, useState } from "react";
import { atomicEngine } from "./Engine/Engine"
import { bookType } from './controllers/controllers';

import {
  AtomicResultSectionVisual,
  AtomicResultImage,
  AtomicSearchBoxInstantResults,
  AtomicResultSectionTitleMetadata,
  AtomicResultSectionTitle,
  AtomicResultLink,
  AtomicResultSectionBottomMetadata,
  AtomicText,
  AtomicResultNumber,
  AtomicFormatUnit,
  AtomicResultSectionExcerpt,
  AtomicResultText,
  AtomicResultSectionEmphasized,
  AtomicSearchInterface,
  AtomicResultList,
  AtomicSearchBox,
  AtomicLayoutSection,
  AtomicFacetManager,
  AtomicFacet,
  AtomicAutomaticFacetGenerator,
  AtomicPager,
  AtomicLoadMoreResults,
  AtomicResultsPerPage,
  AtomicBreadbox,
  AtomicSortDropdown,
  AtomicSortExpression,
} from '@coveo/atomic-react';
import { buildSearchEngine, FacetValueRequest, loadDidYouMeanActions, loadFacetSetActions, loadQueryActions, loadQuerySetActions } from '@coveo/headless';
import { Result } from '@coveo/headless';
import { 
  loadFieldActions,
  SearchEngine,
} from "@coveo/headless";
import Facet from './components/FacetSection/Facet';
import { SearchSection } from './components/SearchSection/SearchSection';
import { FacetSection } from './components/FacetSection/FacetSection';
import { ResultsSection } from "./components/ResultsSection/ResultsSection";
import { StatusSection } from "./components/StatusSection/StatusSection";

import ResultSectionAtomic from "./components/ResultSectionAtomic/ResultSectionAtomic";



const MyDefaultTemplate:React.FC<{result:Result}> = ({result}) => (
  <>
        <p>
          {"Title: "}
          <AtomicResultLink></AtomicResultLink>
        </p>
        <p>
          {"Book Name: "}
          <AtomicResultText field="book_name"></AtomicResultText>
        </p>
        <p>
          {"Description: "}
          <AtomicResultText field="excerpt"></AtomicResultText>
        </p>
      </>
);

const MyResultTemplateFunction = (result: Result) => {
  return <MyDefaultTemplate result={result}/>;
};




export const App = () => {

  
  useEffect(() => {
    // Subscribe to the engine state changes
    const unsubscribe = atomicEngine.subscribe(() => {
      const currentState = atomicEngine.state;
      console.log('Atomic Engine State Updated:', currentState);
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  // const handleEngineStateChange = (state: typeof atomicEngine.state) => {
  //   // Check if facetSet exists and handle selected facet values
  //   if (state.facetSet) {
  //     // const selectedFacets = Object.keys(state.facetSet);
  //     console.log("This is me", state.facetSet['book_type']['request']['currentValues']);

  //     // console.log('Selected Facets:', selectedFacets);

  //     setSelectedFacets(selectedFacets);
  //   }
  // };

  // useEffect(() => {
  //   const unsubscribe=atomicEngine.subscribe(()=>{
  //     if(atomicEngine.state.didYouMean?.wasCorrectedTo!=""){
  //       console.log("Query Corrected : ",atomicEngine.state.didYouMean?.wasCorrectedTo);
  //       console.log("Query Corrected : ",atomicEngine.state.didYouMean?.originalQuery);
  //     }
  //   })
    
  //   return () => unsubscribe();
  // },[]);


  return (
    <AtomicSearchInterface engine={atomicEngine}>
          <div className="logo-search">
          <div className="logoClass">
            <img src="/file.png" alt="" className="logo"/>
          </div>
          <SearchSection />
          </div>
        <div className="facet-result-container">
          <div className="facets">
            <FacetSection />
          </div>
          <div className="results-pagination">
            <StatusSection />
        
        
            {/* <ResultsSection /> */}
            <ResultSectionAtomic />
            <AtomicLayoutSection section="pagination">
              <div className="pager-resultsPerPage">
              <div>
                <AtomicPager></AtomicPager>
              </div>
              <div>
                  <AtomicResultsPerPage choicesDisplayed="12,24,32,64,128" ></AtomicResultsPerPage>
              </div>
              </div>
              
          </AtomicLayoutSection>
          </div>
        </div>
    </AtomicSearchInterface>
  );
};


/* <AtomicSearchBoxInstantResults
      template={() => {
        return (
          <>
            <AtomicResultSectionTitle>
              <AtomicResultLink />
            </AtomicResultSectionTitle>
            <AtomicResultSectionTitleMetadata>
              <p>
                {"Source: "}
                <AtomicResultText field="source"></AtomicResultText>
              </p>
            </AtomicResultSectionTitleMetadata>
          </>
        );
      }}
      />  */


/* <AtomicSearchInterface engine={atomicEngine}>
        <SearchSection />
        <div>
          <FacetSection />
        </div>
      <AtomicLayoutSection section="main">
        <AtomicLayoutSection section="status">

        </AtomicLayoutSection>
        <AtomicLayoutSection section="results">
          <AtomicResultList display="grid" template={MyResultTemplateFunction} />
        </AtomicLayoutSection>
        <AtomicLayoutSection section="pagination">
          <AtomicLoadMoreResults></AtomicLoadMoreResults>
          <AtomicPager></AtomicPager>
          <AtomicResultsPerPage choicesDisplayed="5,10,15,20"></AtomicResultsPerPage>
        </AtomicLayoutSection>
      </AtomicLayoutSection>
    </AtomicSearchInterface> */
