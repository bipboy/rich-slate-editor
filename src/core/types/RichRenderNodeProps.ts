import {AnyObject} from './utility/AnyObject';
import {RichEditor} from './RichEditor';

/**
 * Node props passed by Rich
 */
export interface RichRenderNodeProps extends AnyObject {
  className?: string;
  editor: RichEditor;
  props?: AnyObject;
}
