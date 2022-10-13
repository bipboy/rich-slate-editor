import * as React from 'react';

import {Button, ButtonProps} from 'baseui/button';

import {isBlockActive} from '../queries';
import {toggleBlock} from '../transforms/toggleBlock';
import {useSlate} from 'slate-react';

export interface BlockButtonProps extends ButtonProps {
  blockType: string;
  title: string;
}

export const BlockButton = ({
  blockType,
  children,
  title,
  ...props
}: BlockButtonProps) => {
  const editor = useSlate();

  const handleMouseDown = (event) => {
    // preventDefault() makes sure that the selection does not go away
    // onMouseDown. This makes the hover toolbar stick.
    // Note: Don't use onClick() or onChange(). onMouseDown() is needed
    // for this mechanism to work.
    event.preventDefault();
    toggleBlock(editor, blockType);
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
      isSelected={isBlockActive(editor, blockType)}
      onClick={handleMouseDown}
      {...props}
    >
      {children}
    </Button>
  );
};
