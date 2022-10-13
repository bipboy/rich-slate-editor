import * as React from 'react';

export type SvgIconType = {
  children?: React.ReactNode;
  viewBox?: string;
  fill?: string;
  size?: string;
  marginRight?: string | number;
  selected?: boolean;
};

let id = 0;

const SvgIcon = React.forwardRef(function SvgIcon(
  props: SvgIconType,
  ref: any
) {
  const {
    children,
    size = '24px',
    fill,
    viewBox,
    marginRight,
    selected = false,
    ...other
  } = props;

  return (
    <svg
      data-biptik="svg-icon-set"
      style={{height: size, width: size, marginRight: marginRight, fill: fill}}
      ref={ref}
      focusable="false"
      viewBox={viewBox}
      id={`biptik-icon-${++id}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      alignmentBaseline={'middle'}
      {...other}
    >
      {children}
    </svg>
  );
});

export default SvgIcon;
