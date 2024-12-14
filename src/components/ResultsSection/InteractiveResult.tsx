import { buildInteractiveResult, Result } from '@coveo/headless';
import { FunctionComponent, PropsWithChildren, useEffect } from 'react';
import { atomicEngine } from '../../Engine/Engine';
import React from "react"
interface InteractiveResultProps extends PropsWithChildren {
  result: Result;
}

export const InteractiveResult: FunctionComponent<InteractiveResultProps> = (
  props
) => {
  const controller = buildInteractiveResult(atomicEngine, {
    options: {result: props.result},
  });

  useEffect(() => () => controller.cancelPendingSelect());

  return (
    <a
      href={filterProtocol(props.result.clickUri)}
      onClick={() => controller.select()}
      onContextMenu={() => controller.select()}
      onMouseDown={() => controller.select()}
      onMouseUp={() => controller.select()}
      onTouchStart={() => controller.beginDelayedSelect()}
      onTouchEnd={() => controller.cancelPendingSelect()}
    >
     {props.children}
    </a>
  );
};

// Filters out dangerous URIs that can create XSS attacks such as `javascript:`.
function filterProtocol(uri: string) {
  const isAbsolute = /^(https?|ftp|file|mailto|tel):/i.test(uri);
  const isRelative = /^\//.test(uri);

  return isAbsolute || isRelative ? uri : '';
}
