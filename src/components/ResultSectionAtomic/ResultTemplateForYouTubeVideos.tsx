import { AtomicFormatUnit, AtomicResultImage, AtomicResultLink, AtomicResultNumber, AtomicResultSectionBottomMetadata, AtomicResultSectionTitle, AtomicResultSectionVisual, AtomicText } from "@coveo/atomic-react";
import { Result } from "@coveo/headless";
import React from "react";
export const ResultTemplateForYouTubeVideos: React.FC<{result: Result}> = ({
    result,
  }) => {
    return (
      <>
        <AtomicResultSectionVisual>
          <AtomicResultImage field="ytthumbnailurl" />
        </AtomicResultSectionVisual>
        <AtomicResultSectionTitle>
          <AtomicResultLink />
        </AtomicResultSectionTitle>
        {result.raw.ytvideoduration !== undefined && (
          <AtomicResultSectionBottomMetadata>
            <AtomicText value="Duration" />
            <AtomicResultNumber field="ytvideoduration">
              <AtomicFormatUnit unit="minute" />
            </AtomicResultNumber>
          </AtomicResultSectionBottomMetadata>
        )}
      </>
    );
  };