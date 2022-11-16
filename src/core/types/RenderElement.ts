import {RichRenderElementProps} from './RichRenderElementProps';

/**
 * Function used to render an element.
 * If the function returns undefined then the next RenderElement function is called.
 * If the function renders a JSX element then that JSX element is rendered.
 */
export type RenderElement = (
  props: RichRenderElementProps
) => JSX.Element | undefined;
