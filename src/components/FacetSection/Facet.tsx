
import { Facet as FacetController } from '@coveo/headless';
import { useEffect, useState, FunctionComponent } from 'react';
import { FacetSearch } from './FacetSearch';
import React from 'react';
import { atomicEngine } from '../../Engine/Engine';
interface FacetProps {
  controller: FacetController;
  title: string;
}

const Facet: FunctionComponent<FacetProps> = (props) => { 
  const { controller } = props;
  const [state, setState] = useState(controller.state);
  useEffect(() => {
    controller.subscribe(() => setState(controller.state));
  }, [controller]);
  if (!state.values.length) {
    return (
      <div className="fact">
      <h3>{props.title}</h3>
      <div>No facet values</div>
    </div>
    );
  }

  return (
    <div className="facet">
      <h3>{props.title}</h3>
      <FacetSearch controller={controller.facetSearch} facetSearchState={state.facetSearch} />
      <ul>
        {state.values.map((value) => (
          <li key={value.value} className={controller.isValueSelected(value) ? 'selected-facet' : ''}>
            <input
              type="checkbox"
              checked={controller.isValueSelected(value)}
              onChange={() => controller.toggleSelect(value)}
              disabled={state.isLoading}
              
            />
            {value.value} ({value.numberOfResults})
          </li>
        ))}
      </ul>
      {state.canShowMoreValues && (
        <button className='show-more-btn' onClick={() => controller.showMoreValues()}>Show More ▼</button>
      )}
      {state.canShowLessValues && (
        <button className='show-less-btn' onClick={() => controller.showLessValues()}>Show Less ▲</button>
      )}
    </div>
  );
}

export default Facet;
