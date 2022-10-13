import {Editor} from 'slate';
import {EditorAboveOptions} from '../types/Editor.types';
import {TAncestor} from '../../types/slate/TAncestor';
import {TEditor} from '../../types/slate/TEditor';
import {getQueryOptions} from './match';

/**
 * Get node above a location (default: selection).
 */
export const getAbove = <T extends TAncestor = TAncestor>(
  editor: TEditor,
  options: EditorAboveOptions<T> = {}
) => {
  return Editor.above<T>(editor, getQueryOptions(editor, options));
};
