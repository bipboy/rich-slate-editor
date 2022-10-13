import * as React from 'react';

import SvgIcon, {SvgIconType} from '../SvgIcon';

export const TextUnderline = (
  props: JSX.IntrinsicAttributes & SvgIconType & React.RefAttributes<unknown>
) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path
        fill={props.fill}
        d="M4 26h24v2H4zM16 23a7 7 0 0 1-7-7V5h2v11a5 5 0 0 0 10 0V5h2v11a7 7 0 0 1-7 7Z"
      />
    </SvgIcon>
  );
};
