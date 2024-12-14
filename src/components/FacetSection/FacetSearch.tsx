import {
  FacetSearch as FacetSearchController,
    FacetSearchState,
  } from '@coveo/headless';
  import React from 'react';
  import {FunctionComponent} from 'react';
  
  export interface FacetSearchProps {
    controller: FacetSearchController;
    facetSearchState: FacetSearchState;
  }
  
  export const FacetSearch: FunctionComponent<FacetSearchProps> = (props) => {
    const updateSearch = (text: string) => {
      props.controller.updateText(text);
      props.controller.search();
    };
  
    const searchResultsStyle = {
      listStyleType: 'none',
      
    };
  
    return (
      <div className='facet-search-bar'>
        <input 
          value={props.facetSearchState.query}
          onInput={(e) => updateSearch(e.currentTarget.value)}
        />
        
        <div className='facet-search-suggestions-div'>
        {props.facetSearchState.query !== '' && (
          <ul style={searchResultsStyle} className='searchSuggestions'>
            {props.facetSearchState.values.map((facetSearchValue) => (
              <li key={facetSearchValue.rawValue} onClick={()=>props.controller.select(facetSearchValue)} className='searchSuggestionsValue'>
                  {facetSearchValue.displayValue} ({facetSearchValue.count})
              </li>
            ))}
          </ul>
        )}
        </div>
      </div>
    );
  };