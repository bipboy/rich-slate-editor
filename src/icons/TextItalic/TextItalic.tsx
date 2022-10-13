import * as React from 'react';

import SvgIcon, {SvgIconType} from '../SvgIcon';

export const TextItalic = (
  props: JSX.IntrinsicAttributes & SvgIconType & React.RefAttributes<unknown>
) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path
        fill={props.fill}
        d="M25 9V7H12v2h5.14l-4.37 14H7v2h13v-2h-5.14l4.37-14H25z"
      />
    </SvgIcon>
  );
};
