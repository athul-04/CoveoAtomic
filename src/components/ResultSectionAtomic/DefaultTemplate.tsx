import { AtomicResultImage, AtomicResultLink, AtomicResultSectionBottomMetadata, AtomicResultSectionExcerpt, AtomicResultSectionTitle, AtomicResultSectionVisual, AtomicResultText } from "@coveo/atomic-react";
import { Result } from "@coveo/headless";
import React from "react";


export const DefaultTemplate: React.FC<{result:Result}> = ({result}) => {
    var image_url=result.raw.book_image as string;
    console.log(result.title)
    if (image_url) {
        image_url="	https://books.toscrape.com"+image_url.slice(5);
        
    }
    else image_url="";
    console.log(image_url);

    var TemplateResult=result.title as string;
    if(TemplateResult.length>55) {
        TemplateResult=TemplateResult.slice(0,55)+"...";
    }

    const resultImageDefaultDiv={
        width: "100%",
        marginRight: "auto",
    }
    const resultImage={
        height:"20em",
        display: "block",
        marginLeft: "auto",
        marginRight:"auto",
    }
    const resultTitle={
        paddingTop:"1em",
        textAlign:"center" as const,
        color:"#333333",
    }
    const resultBottomSection={
        marginTop:"1em",
        display:"flex",
        justifyContent:"space-around",
    }

    const contentColor={
        color:"#666666",
        fontWeight:"bold",
    }


    return (
      <div className="Result-Box">
        <AtomicResultSectionVisual>
        <div className="result-image-default-div" style={resultImageDefaultDiv}>
            <img className="result-image-default" src={image_url} alt=""  style={resultImage}/>
        </div>
        </AtomicResultSectionVisual >

        <div className="pa">
            <p style={resultTitle}>{TemplateResult}</p> 
        </div>
        <div style={resultBottomSection}>
            <AtomicResultText style={contentColor} field="book_type" />
            <AtomicResultText style={contentColor} field="book_price"/>
        </div>
      </div>
    );
  };