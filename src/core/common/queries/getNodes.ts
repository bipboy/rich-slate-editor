import {UnhangRangeOptions, unhangRange} from '../transforms/unhangRange';

import {Editor} from 'slate';
import {EditorNodesOptions} from '../types/Editor.types';
import {TEditor} from '../../types/slate/TEditor';
import {TNode} from '../../types/slate/TNode';
import {getQueryOptions} from './match';

export const getNodes = <T extends TNode>(
  editor: TEditor,
  options: EditorNodesOptions & UnhangRangeOptions = {}
) => {
  unhangRange(editor, options);

  return Editor.nodes<T>(editor, getQueryOptions(editor, options));
};
