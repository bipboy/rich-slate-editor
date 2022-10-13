import * as React from 'react';

import SvgIcon, {SvgIconType} from '../SvgIcon';

export const TextSuperscript = (
  props: JSX.IntrinsicAttributes & SvgIconType & React.RefAttributes<unknown>
) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path
        fill={props.fill}
        d="M29 17h-6v-6h4V9h-4V7h6v6h-4v2h4v2zM4 7v2h7v16h2V9h7V7H4z"
      />
    </SvgIcon>
  );
};
