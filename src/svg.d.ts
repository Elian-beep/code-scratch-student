declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;

  const src: string;
  export default src;
}

  // React.FunctionComponent<React.SVGAttributes<SVGElement>>
  // React.FC<React.SVGProps<SVGSVGElement>>