import * as React from 'react';

import {BaseEditor, Location} from 'slate';
import {Button, ButtonProps} from 'baseui/button';
import {RichEditor, getAbove, toggleLinkAtSelection} from '..';

import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import {Popover} from 'baseui/popover';
import {hasActiveLinkAtSelection} from '../queries/hasActiveLinkAtSelection';
import {useSlate} from 'slate-react';
import {useStyletron} from 'baseui';

export interface LinkButtonProps extends ButtonProps {
  openInNewTab: boolean;
  children: React.ReactElement;
  selection: Location;
}

export const LinkAddButton = ({
  children,
  openInNewTab,
  selection,
  ...props
}: LinkButtonProps) => {
  const editor = useSlate() as RichEditor<BaseEditor>;
  const [css, theme] = useStyletron();
  const [isOpenPopver, setIsOpenPopover] = React.useState(false);

  // Error State
  const [negativeError, setNegativeError] = React.useState(false);

  const node = getAbove(editor, {
    at: selection,
    match: (n) => n.type === 'link'
  });

  // URL: State
  const [valueURL, setValueURL] = React.useState<string>('');
  const onChangeURL = (e) => {
    setValueURL(e.currentTarget.value);
  };

  React.useEffect(() => {
    if (typeof node?.[0].url === 'string' && node?.[0].url.length > 0) {
      setValueURL(node?.[0].url);
    } else setValueURL('');
  }, [node, isOpenPopver]);

  const onLinkURLChange = React.useCallback(
    (event) => {
      // preventDefault() makes sure that the selection does not go away
      // onMouseDown. This makes the hover toolbar stick.
      // Note: Don't use onClick() or onChange(). onMouseDown() is needed
      // for this mechanism to work.
      event.preventDefault();
      event.preventDefault();

      const validLink = new RegExp(
        /https:\/\/(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
      );

      if (!valueURL.match(validLink)) {
        console.log('negativeError');
        setNegativeError(true);
      }

      if (valueURL.match(validLink)) {
        setNegativeError(false);
        toggleLinkAtSelection(editor, valueURL);
        setIsOpenPopover(false);
      }
    },
    [valueURL]
  );

  const contentCx = css({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.sizing.scale600,
    width: '300px',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    backgroundColor: theme.colors.primaryB,
    boxShadow:
      'rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px'
  });

  return (
    <Popover
      onBlur={() => setNegativeError(false)}
      placement="bottomRight"
      isOpen={isOpenPopver}
      onClickOutside={() => {
        setNegativeError(false);
        setIsOpenPopover(false);
      }}
      accessibilityType={'tooltip'}
      content={() => {
        return (
          <form className={contentCx}>
            <div
              className={css({
                ...theme.typography.LabelLarge,
                marginBottom: '0.5rem'
              })}
            >
              Добавить ссылку
            </div>
            <div
              className={css({
                display: 'flex',
                flexDirection: 'column'
              })}
            >
              <FormControl
                label={'Адрес ссылки'}
                caption={
                  negativeError
                    ? 'Формат адреса не правильный, корректный формат: https://example.com/...'
                    : 'Ссылка должна быть вида https://example.com/'
                }
                error={negativeError}
              >
                <Input
                  required
                  value={valueURL}
                  onChange={onChangeURL}
                  name="data-inline-rich-link"
                  size="compact"
                  type="text"
                  error={negativeError}
                />
              </FormControl>
            </div>
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                alignSelf: 'end',
                maxWidth: 'min-content',
                gap: '10px'
              })}
            >
              <Button
                type="button"
                kind="secondary"
                size="compact"
                onClick={() => setIsOpenPopover(false)}
              >
                Отмена
              </Button>
              <Button
                kind="primary"
                size="compact"
                type="button"
                onClick={onLinkURLChange}
              >
                Добавить
              </Button>
            </div>
          </form>
        );
      }}
    >
      <div
        className={css({
          display: 'inline-flex'
        })}
      >
        <Button
          title="Добавить ссылку"
          // disabled={isDiabled}
          onClick={() => setIsOpenPopover(true)}
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
          isSelected={hasActiveLinkAtSelection(editor)}
          {...props}
        >
          {React.cloneElement(children, {
            size: '20px',
            fill: theme.colors.primary700
          })}
        </Button>
      </div>
    </Popover>
  );
};
