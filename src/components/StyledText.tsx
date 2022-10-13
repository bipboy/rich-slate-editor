import * as React from 'react';

export function StyledText(props) {
  const {leaf, attributes, children} = props;

  let content = children;

  if (leaf.bold) {
    content = <strong>{content}</strong>;
  }

  if (leaf.italic) {
    content = <em>{content}</em>;
  }

  if (leaf.underline) {
    content = <u>{content}</u>;
  }

  if (leaf.strikethrough) {
    content = <s>{content}</s>;
  }

  if (leaf.code) {
    content = <code>{content}</code>;
  }

  if (leaf.sup) {
    content = <sup>{content}</sup>;
  }

  if (leaf.sub) {
    content = <sub>{content}</sub>;
  }

  return <span {...attributes}>{content}</span>;
}
