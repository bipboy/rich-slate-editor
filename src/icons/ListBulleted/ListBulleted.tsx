import * as React from 'react';

import SvgIcon, {SvgIconType} from '../SvgIcon';

export const ListBulleted = (
  props: JSX.IntrinsicAttributes & SvgIconType & React.RefAttributes<unknown>
) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <circle fill={props.fill} cx="7" cy="9" r="3" />
      <circle fill={props.fill} cx="7" cy="23" r="3" />
      <path fill={props.fill} d="M16 22h14v2H16zM16 8h14v2H16z" />
    </SvgIcon>
  );
};
