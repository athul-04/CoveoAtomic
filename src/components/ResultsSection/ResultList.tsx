import { useState, useEffect, FunctionComponent } from "react";
import { Result,ResultTemplatesManager,ResultList as ResultListController } from "@coveo/headless";
import React from "react";
import { JSX } from "react";
interface ResultListProps {
  controller: ResultListController;
  resultTemplatesManager: ResultTemplatesManager<(result:Result)=>JSX.Element>;
}

const ResultList: FunctionComponent<ResultListProps> = (props) => {
  const { controller , resultTemplatesManager} = props;
  const [state, setState] = useState(controller.state);

  useEffect(
    () => controller.subscribe(() => setState(controller.state)),
    [controller]
  );
  if (!state.results.length) {
    return <div>No results</div>;
  }

  return (
    <div className="result-list">
        {state.results.map((result) => {
          const template = resultTemplatesManager.selectTemplate(result);

          if (!template)
            throw new Error(`No result template provided for ${result.title}.`);

          return template(result);
        })}
    </div>
  );
};

export default ResultList;
