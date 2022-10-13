import {InsertNodesOptions} from '../types';
import {TEditor} from '../../types/slate/TEditor';
import {TNode} from '../../types/slate/TNode';
import {Transforms} from 'slate';

export const insertNodes = <
  T extends TNode = TNode,
  TNodeMatch extends TNode = TNode
>(
  editor: TEditor,
  props: T | T[],
  options?: InsertNodesOptions
) => Transforms.insertNodes<TNodeMatch>(editor, props, options as any);
