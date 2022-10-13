import {isCollapsed, unwrapNodes} from '../core';

import {Element} from 'slate';
import {createLinkForRange} from './createLinkForRange';
import {hasActiveLinkAtSelection} from '../queries';

export function toggleLinkAtSelection(editor, url) {
  if (editor.selection == null) {
    return;
  }

  if (hasActiveLinkAtSelection(editor)) {
    unwrapNodes(editor, {
      match: (n) => Element.isElement(n) && n.type === 'link'
    });
  } else {
    const isSelectionCollapsed =
      editor.selection == null || isCollapsed(editor.selection);
    if (isSelectionCollapsed) {
      createLinkForRange(editor, null, url, url, true /*isInsertion*/);
    } else {
      createLinkForRange(editor, editor.selection, '', url);
    }
  }
}
