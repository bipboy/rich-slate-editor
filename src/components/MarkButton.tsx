import * as React from 'react';

import {Button, ButtonProps} from 'baseui/button';

import {isMarkActive} from '../queries';
import {toggleMark} from '../transforms';
import {useSlate} from 'slate-react';

export interface MarkButtonProps extends ButtonProps {
  markType: string;
  title: string;
}

export const MarkButton = ({
  markType,
  children,
  title,
  ...props
}: MarkButtonProps) => {
  const editor = useSlate();

  const handleMouseDown = (event) => {
    // preventDefault() makes sure that the selection does not go away
    // onMouseDown. This makes the hover toolbar stick.
    // Note: Don't use onClick() or onChange(). onMouseDown() is needed
    // for this mechanism to work.
    event.preventDefault();
    toggleMark(editor, markType);
  };

  return (
    <Button
      overrides={{
        BaseButton: {
          style: ({$isSelected, $theme}) => {
            if ($isSelected) {
              return {
                color: $theme.colors.buttonPrimarySelectedText,
                backgroundColor: $theme.colors.buttonSecondaryActive,
                paddingLeft: '2.5px !important',
                paddingRight: '2.5px !important',
                paddingTop: '2.5px !important',
                paddingBottom: '2.5px !important',
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px',
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px'
              };
            }
            return {
              paddingLeft: '2.5px !important',
              paddingRight: '2.5px !important',
              paddingTop: '2.5px !important',
              paddingBottom: '2.5px !important',
              borderTopRightRadius: '4px',
              borderBottomRightRadius: '4px',
              borderTopLeftRadius: '4px',
              borderBottomLeftRadius: '4px'
            };
          }
        }
      }}
      title={title}
      isSelected={isMarkActive(editor, markType)}
      onClick={handleMouseDown}
      {...props}
    >
      {children}
    </Button>
  );
};
