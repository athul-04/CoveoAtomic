import React from "react";

import { AtomicSearchPage } from "./AtomicSearchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorRoute } from "./ErrorRoute";
import { Purchase } from "./components/Purchase/Purchase";

export const App = () => {
  const routes=createBrowserRouter([
    {path:"/", element: <AtomicSearchPage/>,errorElement:<ErrorRoute/>},
    {path:"/purchase",element:<Purchase />,errorElement:<ErrorRoute/>}
  ])

  return (
    <RouterProvider router={routes} />
  )
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
