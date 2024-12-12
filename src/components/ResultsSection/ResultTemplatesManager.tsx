import {
    ResultTemplatesManager,
    Result,
    buildResultTemplatesManager,
    ResultTemplatesHelpers, 
  } from '@coveo/headless';
  import { InteractiveResult } from './InteractiveResult';
  import { atomicEngine } from '../../Engine/Engine';
  import React, { JSX } from 'react';

  export const resultTemplatesManager: ResultTemplatesManager<
    (result: Result) => JSX.Element
  > = buildResultTemplatesManager(atomicEngine);
  


  resultTemplatesManager.registerTemplates(
    {
      conditions: [],
      content: (result: Result) => (
        <div className='result-box'>
          <div key={result.uniqueId}>
          <article>
            <h2>
              <InteractiveResult result={result}>
                {result.title}
              </InteractiveResult>
            </h2>
            <p>{result.excerpt}</p>
          </article>
          <p>{result.raw.book_name as string}</p>
        </div>
        </div>
      ),
      fields:['book_name'],
    },
    {
      priority: 1,
      conditions: [
        ResultTemplatesHelpers.fieldMustMatch('sourcetype',   ['YouTube']),
      ],
      content: (result: Result) => (
        <li key={result.uniqueId}>
          <article className="youtube-result">
            <div>
              <h2>
                <InteractiveResult result={result}>
                  {result.title}
                </InteractiveResult>
              </h2>
              <p>{result.excerpt}</p>
            </div>
            <div>
              <img
                src={result.raw.ytthumbnailurl as string}
                alt="Thumbnail"
              ></img>
            </div>
          </article>
        </li>
      ),
      fields: ['ytthumbnailurl'],
    }
  );