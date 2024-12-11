import React from 'react';
import { atomicEngine } from "./Engine/Engine.ts"
import { fileTypeFacet } from './controllers/controllers.ts';
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
import Facet from './components/Facet.tsx';




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

const MyResultTemplateFunction: JSX.Element = (result: Result) => {
  return <MyDefaultTemplate result={result}/>;
};




export const App = () => {

  return (
    <AtomicSearchInterface engine={atomicEngine}>
      <AtomicLayoutSection section="search">
          <AtomicSearchBox/>
      </AtomicLayoutSection>
      <AtomicLayoutSection section="facets">
          <AtomicFacetManager>
            {/* <AtomicAutomaticFacetGenerator></AtomicAutomaticFacetGenerator> */}
            <Facet controller={fileTypeFacet} title="My Facet"></Facet>
          </AtomicFacetManager>
      </AtomicLayoutSection>
      <AtomicLayoutSection section="main">
        <AtomicLayoutSection section="status">

        </AtomicLayoutSection>
        <AtomicLayoutSection section="result">
          <AtomicResultList display="grid" template={MyResultTemplateFunction} />
        </AtomicLayoutSection>
        <AtomicLayoutSection section="pagination">
          <AtomicLoadMoreResults></AtomicLoadMoreResults>
          <AtomicPager></AtomicPager>
          <AtomicResultsPerPage choicesDisplayed="5,10,15,20"></AtomicResultsPerPage>
        </AtomicLayoutSection>
      </AtomicLayoutSection>
    </AtomicSearchInterface>
  );
};


{/* <AtomicSearchBoxInstantResults
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
      />  */}
