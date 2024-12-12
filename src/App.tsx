import React from "react";
import { atomicEngine } from "./Engine/Engine"
import { fileTypeFacet } from './controllers/controllers';
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
} from '@coveo/atomic-react';
import { buildSearchEngine } from '@coveo/headless';
import { Result } from '@coveo/headless';
import { 
  loadFieldActions,
  SearchEngine,
} from "@coveo/headless";
import Facet from './components/FacetSection/Facet';
import { SearchSection } from './components/SearchSection/SearchSection';
import { FacetSection } from './components/FacetSection/FacetSection';




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

  return (
    <AtomicSearchInterface engine={atomicEngine}>
        <SearchSection />
        <div className="facet-result-container">
          <div className="facet">
            <FacetSection />
          </div>
          <div className="results-pagination">
            <AtomicResultList display="grid" template={MyResultTemplateFunction} />
            <AtomicLayoutSection section="pagination">
              <div className="pager-resultsPerPage">
              <div>
                <AtomicPager></AtomicPager>
              </div>
              <div>
                  <AtomicResultsPerPage choicesDisplayed="12,24,32,64"></AtomicResultsPerPage>
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


{/* <AtomicSearchInterface engine={atomicEngine}>
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
    </AtomicSearchInterface> */}
