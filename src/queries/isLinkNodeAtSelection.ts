import {getAbove} from '../core';

export function isLinkNodeAtSelection(editor, selection) {
  if (selection == null) {
    return false;
  }

  return (
    getAbove(editor, {
      at: selection,
      match: (n) => n.type === 'link'
    }) != null
  );
}
