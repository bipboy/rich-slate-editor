import {UnhangRangeOptions, unhangRange} from './unhangRange';

import {TEditor} from '../../types/slate/TEditor';
import {TElement} from '../../types/slate/TElement';
import {TNode} from '../../types/slate/TNode';
import {Transforms} from 'slate';
import {WrapOptions} from '../types/Transforms.types';

/**
 * {@link Transforms.wrapNodes}.
 */
export const wrapNodes = <
  T extends TElement = TElement,
  TNodeMatch extends TNode = TNode
>(
  editor: TEditor,
  element: T,
  options: WrapOptions<TNodeMatch> & UnhangRangeOptions = {}
) => {
  unhangRange(editor, options);

  Transforms.wrapNodes<TNodeMatch>(editor, element as any, options as any);
};
