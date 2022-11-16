import {AnyObject} from './utility/AnyObject';
import {RichRenderNodeProps} from './RichRenderNodeProps';
import {TRenderElementProps} from './slate/TRenderElementProps';

export type RichRenderElementProps<EElement = AnyObject> = RichRenderNodeProps &
  TRenderElementProps<EElement>;
