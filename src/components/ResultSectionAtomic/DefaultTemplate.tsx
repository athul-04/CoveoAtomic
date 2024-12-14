import { AtomicResultLink, AtomicResultSectionExcerpt, AtomicResultSectionTitle, AtomicResultText } from "@coveo/atomic-react";
import React from "react";

export const DefaultTemplate: React.FC<{}> = () => {
    return (
      <div className="Result-Box">
        <AtomicResultSectionTitle>
          <AtomicResultLink />
        </AtomicResultSectionTitle>
        <AtomicResultSectionExcerpt>
          <AtomicResultText field="book_type" />
        </AtomicResultSectionExcerpt>
        
      </div>
    );
  };