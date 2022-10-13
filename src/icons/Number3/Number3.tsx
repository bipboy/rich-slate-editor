import * as React from 'react';

import SvgIcon, {SvgIconType} from '../SvgIcon';

export const Number3 = (
  props: JSX.IntrinsicAttributes & SvgIconType & React.RefAttributes<unknown>
) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path
        fill={props.fill}
        d="M18 9h-6v2h6v4h-4v2h4v4h-6v2h6a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2Z"
      />
    </SvgIcon>
  );
};
