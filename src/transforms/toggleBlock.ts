import {Editor, Transforms} from 'slate';

import {ElementType} from '../models';
import {isBlockActive} from '../queries';

const LIST_TYPES = ['bulleted-list', 'numbered-list'];

export const toggleBlock = (editor: Editor, blockType: string) => {
  const isActive = isBlockActive(editor, blockType);
  const isList = LIST_TYPES.includes(blockType);

  Transforms.unwrapNodes(editor, {
    // @ts-ignore
    match: (n) => LIST_TYPES.includes(n.type as ElementType),
    split: true
  });

  Transforms.setNodes(editor, {
    // @ts-ignore
    type: isActive ? 'paragraph' : isList ? 'list-item' : blockType
  });

  if (!isActive && isList) {
    const block = {type: blockType, children: []};
    Transforms.wrapNodes(editor, block);
  }
};
