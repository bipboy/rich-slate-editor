import * as React from 'react';

import {Editable, Slate, withReact} from 'slate-react';
import {useEditorConfig, useSelection} from '../hooks';

import {useStyletron} from 'baseui';
import {createEditor} from 'slate';
import {withHistory} from 'slate-history';
import {isLinkNodeAtSelection} from '../queries';
import {Toolbar} from '../toolbar';

export function Editor({document, onChange}) {
  const [css, theme] = useStyletron();
  // const editorRef = React.useRef(null);

  const editor = React.useMemo(
    // @ts-ignore
    () => withHistory(withReact(createEditor())),
    []
  );

  const {renderLeaf, renderElement} = useEditorConfig(editor);
  const [previousSelection, selection, setSelection] = useSelection(editor);

  // we update selection here because Slate fires an onChange even on pure selection change.
  const onChangeLocal = React.useCallback(
    (doc) => {
      onChange(doc);
      setSelection(editor.selection);
    },
    [onChange, setSelection, editor]
  );

  let selectionForLink = null;
  if (isLinkNodeAtSelection(editor, selection)) {
    selectionForLink = selection;
  } else if (
    selection == null &&
    isLinkNodeAtSelection(editor, previousSelection)
  ) {
    selectionForLink = previousSelection;
  }

  return (
    <Slate editor={editor} initialValue={document} onChange={onChangeLocal}>
      <Toolbar selectionForLink={selectionForLink} />
      <div
        className={css({
          fontFamily:
            'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          overflowY: 'auto',
          minHeight: '240px',
          maxHeight: '240px',
          borderBottom: `2px solid ${theme.colors.primary100}`,
          borderLeft: `2px solid ${theme.colors.primary100}`,
          borderRight: `2px solid ${theme.colors.primary100}`,
          borderTop: `2px solid ${theme.colors.primary100}`,
          borderBottomLeftRadius: '6px',
          borderBottomRightRadius: '6px',
          transition: `
          border-top ${theme.animation.timing200} ${theme.animation.linearCurve} 0s,
          border-bottom ${theme.animation.timing200} ${theme.animation.linearCurve} 0s,
          border-left ${theme.animation.timing200} ${theme.animation.linearCurve} 0s,
          boorder-right ${theme.animation.timing200} ${theme.animation.linearCurve} 0s
          `,
          paddingRight: '16px',
          paddingLeft: '16px',
          paddingBottom: '16px',
          ':focus': {
            borderBottom: `2px solid ${theme.colors.primary400}`,
            borderLeft: `2px solid ${theme.colors.primary400}`,
            borderRight: `2px solid ${theme.colors.primary400}`,
            borderTop: `2px solid ${theme.colors.primary400}`
          }
        })}
      >
        <Editable
          style={{overflowY: 'visible'}}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder={'Введите описание товара…'}
          spellCheck
        />
      </div>
    </Slate>
  );
}
