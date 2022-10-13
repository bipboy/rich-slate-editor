import * as React from 'react';

import SvgIcon, {SvgIconType} from '../SvgIcon';

export const Number5 = (
  props: JSX.IntrinsicAttributes & SvgIconType & React.RefAttributes<unknown>
) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path
        fill={props.fill}
        d="M18 23h-6v-2h6v-4h-6V9h8v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"
      />
    </SvgIcon>
  );
};
