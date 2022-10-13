import * as React from 'react';

import SvgIcon, {SvgIconType} from '../SvgIcon';

export const Number4 = (
  props: JSX.IntrinsicAttributes & SvgIconType & React.RefAttributes<unknown>
) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path
        fill={props.fill}
        d="M18 10v8-8m1-1h-2v8h-3V9h-2v10h5v4h2v-4h1v-2h-1V9Z"
      />
    </SvgIcon>
  );
};
