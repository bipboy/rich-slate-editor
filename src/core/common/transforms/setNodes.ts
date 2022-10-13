import {SetNodesOptions} from '../types/Transforms.types';
import {TEditor} from '../../types/slate/TEditor';
import {TNode} from '../../types/slate/TNode';
import {Transforms} from 'slate';

export const setNodes = <T extends TNode = TNode>(
  editor: TEditor,
  props: Partial<T>,
  options?: SetNodesOptions
) => Transforms.setNodes<T>(editor, props, options as any);
