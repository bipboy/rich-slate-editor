import {AnyObject} from './utility/AnyObject';
import {RichRenderNodeProps} from './RichRenderNodeProps';
import {TRenderLeafProps} from './slate/TRenderLeafProps';

export type RichRenderLeafProps<EText = AnyObject> = RichRenderNodeProps &
  TRenderLeafProps<EText>;
