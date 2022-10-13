import * as React from 'react';

import SvgIcon, {SvgIconType} from '../SvgIcon';

export const Unlink = (
  props: JSX.IntrinsicAttributes & SvgIconType & React.RefAttributes<unknown>
) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path
        fill={props.fill}
        d="m3.584 5.002 1.414-1.415 3.416 3.415L7 8.417zM23.581 24.992l1.415-1.414 3.415 3.416-1.415 1.414zM11 2h2v4h-2zM2 11h4v2H2zM26 19h4v2h-4zM19 26h2v4h-2zM16.58 21.07l-3.71 3.72a4 4 0 1 1-5.66-5.66l3.72-3.72L9.51 14 5.8 17.72a6 6 0 0 0-.06 8.54A6 6 0 0 0 10 28a6.07 6.07 0 0 0 4.32-1.8L18 22.49ZM15.41 10.93l3.72-3.72a4 4 0 1 1 5.66 5.66l-3.72 3.72L22.49 18l3.71-3.72a6 6 0 0 0 .06-8.54A6 6 0 0 0 22 4a6.07 6.07 0 0 0-4.32 1.8L14 9.51Z"
      />
    </SvgIcon>
  );
};
