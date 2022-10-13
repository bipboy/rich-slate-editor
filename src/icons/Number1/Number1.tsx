import * as React from 'react';

import SvgIcon, {SvgIconType} from '../SvgIcon';

export const Number1 = (
  props: JSX.IntrinsicAttributes & SvgIconType & React.RefAttributes<unknown>
) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path fill={props.fill} d="M16 10v12-12m1-1h-5v2h3v10h-3v2h8v-2h-3V9Z" />
    </SvgIcon>
  );
};
