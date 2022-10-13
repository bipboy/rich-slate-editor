import {Editor, Location, NodeEntry} from 'slate';

import {EditorParentOptions} from '../types/Editor.types';
import {TAncestor} from '../../types/slate/TAncestor';
import {TEditor} from '../../types/slate/TEditor';

export const getParent = <T extends TAncestor = TAncestor>(
  editor: TEditor,
  at: Location,
  options?: EditorParentOptions
): NodeEntry<T> | undefined => {
  try {
    return Editor.parent(editor, at, options) as NodeEntry<T> | undefined;
  } catch (err) {}
};
