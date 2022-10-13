import {insertNodes, wrapNodes} from '../core';

export function createLinkForRange(
  editor,
  range,
  linkText,
  linkURL,
  isInsertion?
) {
  if (isInsertion) {
    insertNodes(
      editor,
      {
        type: 'link',
        url: linkURL,
        children: [{text: linkText}]
      },
      range != null ? {at: range} : undefined
    );
  } else {
    wrapNodes(
      editor,
      {type: 'link', url: linkURL, children: [{text: linkText}]},
      {split: true, at: range}
    );
  }
}
