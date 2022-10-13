import * as React from 'react';

import {Button, ButtonProps} from 'baseui/button';
import {hasActiveLinkAtSelection, isLinkActive} from '../queries';

import {unwrapNodes} from '../core';
import {useSlate} from 'slate-react';
import {useStyletron} from 'baseui';

// import {unwrapLink} from '../transforms';

export interface LinkRemoveButtonProps extends ButtonProps {
  children: React.ReactElement;
}

export const LinkRemoveButton = ({
  children,
  ...props
}: LinkRemoveButtonProps) => {
  const editor = useSlate();
  const [, theme] = useStyletron();

  const handleMouseDown = (event) => {
    // preventDefault() makes sure that the selection does not go away
    // onMouseDown. This makes the hover toolbar stick.
    // Note: Don't use onClick() or onChange(). onMouseDown() is needed
    // for this mechanism to work.
    event.preventDefault();
    event.preventDefault();
    if (isLinkActive(editor)) {
      unwrapNodes(editor, {match: (n) => n.type === 'link'});
    }
  };

  return (
    <Button
      title="Удалить ссылку"
      overrides={{
        BaseButton: {
          style: ({$disabled, $isSelected, $theme}) => {
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
            if ($disabled) {
              return {
                color: $theme.colors.buttonPrimarySelectedText,
                backgroundColor: 'transparent !important',
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
      disabled={!hasActiveLinkAtSelection(editor)}
      isSelected={hasActiveLinkAtSelection(editor)}
      onClick={handleMouseDown}
      {...props}
    >
      {React.cloneElement(children, {
        size: '20px',
        fill: !isLinkActive(editor)
          ? theme.colors.buttonDisabledText
          : theme.colors.primary700
      })}
    </Button>
  );
};
