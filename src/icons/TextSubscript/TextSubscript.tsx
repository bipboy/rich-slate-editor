import * as React from 'react';

import SvgIcon, {SvgIconType} from '../SvgIcon';

export const TextSubscript = (
  props: JSX.IntrinsicAttributes & SvgIconType & React.RefAttributes<unknown>
) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path
        fill={props.fill}
        d="M26 25h-6v-6h4v-2h-4v-2h6v6h-4v2h4v2zM5 7v2h7v16h2V9h7V7H5z"
      />
    </SvgIcon>
  );
};
