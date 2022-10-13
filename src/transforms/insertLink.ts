import {Editor, Range, Transforms} from 'slate';

import {isLinkActive} from '../queries';

export const unwrapLink = (editor: Editor) => {
  // @ts-expect-error
  Transforms.unwrapNodes(editor, {match: (n) => n.type === 'link'});
};

export const wrapLink = (
  editor: Editor,
  url: string,
  openInNewTab: boolean
) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const {selection} = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const link = {
    type: 'link',
    url,
    openInNewTab,
    children: isCollapsed ? [{text: url}] : []
  };

  if (isCollapsed) {
    // @ts-ignore
    Transforms.insertNodes(editor, link, {at: editor.selection});
  } else {
    // @ts-ignore
    Transforms.wrapNodes(editor, link, {split: true, at: editor.selection});
    Transforms.collapse(editor, {edge: 'end'});
  }
};

export const insertLink = (
  editor: Editor,
  url: string,
  openInNewTab: boolean
) => {
  if (editor.selection) {
    wrapLink(editor, url, openInNewTab);
  }
};
