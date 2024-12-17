import React from "react";
import { ResultTemplateForYouTubeVideos } from "./ResultTemplateForYouTubeVideos";
import { DefaultTemplate } from "./DefaultTemplate";
import { Result } from "@coveo/headless";
import { useDispatch } from "react-redux";



export const ResultTemplateFunction = (result: Result) => {
  
    if (result.raw.filetype === 'YoutubeVideo') {
      return <ResultTemplateForYouTubeVideos result={result} />;
    }
   
    // if (result.raw.objecttype === 'Case') {
    //   return <ResultTemplateForBookPage result={result} />;
    // }
   
    // return <DefaultTemplate result={result} />;
    return <div></div>
  };