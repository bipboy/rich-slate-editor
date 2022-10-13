import React from 'react';

export const LinkElement = (props) => {
  const {attributes, children, element} = props;
  const url = element.url as string;
  return (
    <a {...attributes} href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
