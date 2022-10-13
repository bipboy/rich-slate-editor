import * as React from 'react';

import SvgIcon, {SvgIconType} from '../SvgIcon';

export const ListNumbered = (
  props: JSX.IntrinsicAttributes & SvgIconType & React.RefAttributes<unknown>
) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path
        fill={props.fill}
        d="M16 22h14v2H16zM16 8h14v2H16zM8 12V4H6v1H4v2h2v5H4v2h6v-2H8zM10 28H4v-4a2 2 0 0 1 2-2h2v-2H4v-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6v2h4Z"
      />
    </SvgIcon>
  );
};
