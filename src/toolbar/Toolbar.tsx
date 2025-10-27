import * as React from 'react';

import {
  BlockButton,
  LinkAddButton,
  LinkRemoveButton,
  MarkButton
} from '../components';
import {
  Link,
  ListBulleted,
  ListNumbered,
  Number1,
  Number2,
  Number3,
  Number4,
  Number5,
  Number6,
  Quotes,
  TextBold,
  TextItalic,
  TextSubscript,
  TextSuperscript,
  TextUnderline,
  Unlink
} from '../icons';

import {useStyletron} from 'baseui';

interface BaseProps {
  [key: string]: unknown;
}

type OrNull<T> = T | null;

const Menu = React.forwardRef(
  (
    {...props}: React.PropsWithChildren<BaseProps>,
    ref: React.Ref<OrNull<HTMLDivElement>>
  ) => {
    const [css, theme] = useStyletron();

    const menuCx = css({
      display: 'flex',
      flexDirection: 'row',
      gap: '0.4rem',
      flexWrap: 'wrap',
      position: 'relative',
      backgroundColor: theme.colors.primary100,
      paddingBottom: '8px',
      paddingRight: '8px',
      paddingLeft: '8px',
      paddingTop: '8px',
      borderTopLeftRadius: '6px',
      borderTopRightRadius: '6px'
    });

    return <div {...props} ref={ref} className={menuCx} />;
  }
);

const ToolbarComponent = React.forwardRef(
  (
    {className, ...props}: React.PropsWithChildren<BaseProps>,
    ref: React.Ref<OrNull<HTMLDivElement>>
  ) => {
    return <Menu {...props} ref={ref} />;
  }
);

export function Toolbar({selectionForLink}) {
  const [css, theme] = useStyletron();

  return (
    <ToolbarComponent>
      <MarkButton size="mini" kind="secondary" markType="bold" title={'bold'}>
        <TextBold size="20px" fill={theme.colors.primary700} />
      </MarkButton>
      <MarkButton
        size="mini"
        kind="secondary"
        markType="italic"
        title={'italic'}
      >
        <TextItalic size="20px" fill={theme.colors.primary700} />
      </MarkButton>
      <MarkButton
        size="mini"
        kind="secondary"
        markType="underline"
        title={'underline'}
      >
        <TextUnderline size="20px" fill={theme.colors.primary700} />
      </MarkButton>
      <MarkButton
        size="mini"
        kind="secondary"
        markType="sub"
        title={'subscript-text'}
      >
        <TextSubscript size="20px" fill={theme.colors.primary700} />
      </MarkButton>
      <MarkButton
        size="mini"
        kind="secondary"
        markType="sup"
        title={'superscript-text'}
      >
        <TextSuperscript size="20px" fill={theme.colors.primary700} />
      </MarkButton>
      <div
        className={css({
          display: 'inline-flex',
          height: '25px',
          width: '1px',
          marginLeft: '6px',
          marginRight: '6px',
          backgroundColor: theme.colors.primary200,
          boxSizing: 'border-box'
        })}
      />
      <BlockButton
        size="mini"
        kind="secondary"
        blockType="heading1"
        title={'heading1'}
      >
        <Number1 size="20px" fill={theme.colors.primary700} />
      </BlockButton>
      <BlockButton
        size="mini"
        kind="secondary"
        blockType="heading2"
        title={'heading2'}
      >
        <Number2 size="20px" fill={theme.colors.primary700} />
      </BlockButton>
      <BlockButton
        size="mini"
        kind="secondary"
        blockType="heading3"
        title={'heading3'}
      >
        <Number3 size="20px" fill={theme.colors.primary700} />
      </BlockButton>
      <BlockButton
        size="mini"
        kind="secondary"
        blockType="heading4"
        title={'heading4'}
      >
        <Number4 size="20px" fill={theme.colors.primary700} />
      </BlockButton>
      <BlockButton
        size="mini"
        kind="secondary"
        blockType="heading5"
        title={'heading5'}
      >
        <Number5 size="20px" fill={theme.colors.primary700} />
      </BlockButton>
      <BlockButton
        size="mini"
        kind="secondary"
        blockType="heading6"
        title={'heading6'}
      >
        <Number6 size="20px" fill={theme.colors.primary700} />
      </BlockButton>
      <BlockButton
        size="mini"
        kind="secondary"
        blockType="block-quote"
        title={'block-quote'}
      >
        <Quotes size="20px" fill={theme.colors.primary700} />
      </BlockButton>
      <div
        className={css({
          display: 'inline-flex',
          height: '25px',
          width: '1px',
          marginLeft: '6px',
          marginRight: '6px',
          backgroundColor: theme.colors.primary200,
          boxSizing: 'border-box'
        })}
      />
      <LinkAddButton
        selection={selectionForLink}
        size="mini"
        kind="secondary"
        openInNewTab={true}
      >
        <Link size="20px" fill={theme.colors.primary700} />
      </LinkAddButton>
      <LinkRemoveButton size="mini" kind="secondary">
        <Unlink />
      </LinkRemoveButton>
      <div
        className={css({
          display: 'inline-flex',
          height: '25px',
          width: '1px',
          marginLeft: '6px',
          marginRight: '6px',
          backgroundColor: theme.colors.primary200,
          boxSizing: 'border-box'
        })}
      />
      <BlockButton
        size="mini"
        kind="secondary"
        blockType="numbered-list"
        title={'numbered-list'}
      >
        <ListNumbered size="20px" fill={theme.colors.primary700} />
      </BlockButton>
      <BlockButton
        size="mini"
        kind="secondary"
        blockType="bulleted-list"
        title={'bulleted-list'}
      >
        <ListBulleted size="20px" fill={theme.colors.primary700} />
      </BlockButton>
    </ToolbarComponent>
  );
}
