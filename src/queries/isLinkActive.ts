import {Editor} from 'slate';

export const isLinkActive = (editor: Editor) => {
  const linkEntries = Array.from(
    // @ts-expect-error
    Editor.nodes(editor, {match: (n) => n.type === 'link'})
  );
  return linkEntries.length > 0;
};
