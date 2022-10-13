import {Editor} from 'slate';

export const isBlockActive = (editor: Editor, blockType: string) => {
  const blockEntries = Array.from(
    // @ts-expect-error
    Editor.nodes(editor, {match: (n) => n.type === blockType})
  );

  return blockEntries.length > 0;
};
