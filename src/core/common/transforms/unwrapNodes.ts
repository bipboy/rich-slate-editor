import {TEditor} from '../../types/slate/TEditor';
import {Transforms} from 'slate';
import {WrapOptions} from '../types/Transforms.types';
import {getQueryOptions} from '../queries/match';

export const unwrapNodes = (editor: TEditor, options?: WrapOptions) => {
  Transforms.unwrapNodes(editor, getQueryOptions(editor, options));
};
