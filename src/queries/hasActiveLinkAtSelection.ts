import {isLinkNodeAtSelection} from './isLinkNodeAtSelection';

export function hasActiveLinkAtSelection(editor) {
  return isLinkNodeAtSelection(editor, editor.selection);
}
