import * as React from 'react';

import SvgIcon, {SvgIconType} from '../SvgIcon';

export const Number6 = (
  props: JSX.IntrinsicAttributes & SvgIconType & React.RefAttributes<unknown>
) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path
        fill={props.fill}
        d="M18 14h-4v-3h5V9h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Zm-4 7v-5h4v5Z"
      />
    </SvgIcon>
  );
};
