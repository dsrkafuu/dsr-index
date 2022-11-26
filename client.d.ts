declare module '*.svg' {
  import React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;
}

declare global {
  import SakanaWidget from 'sakana-widget';
  interface Window {
    _SakanaWidget: SakanaWidget;
  }
}
