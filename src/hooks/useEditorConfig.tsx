import * as React from 'react';

import {DefaultElement} from 'slate-react';
import {LinkElement} from '../components/LinkElement';
import {StyledText} from '../components/StyledText';

function renderElement(props) {
  const {element, children, attributes} = props;
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return (
        <ul content-editable={'true'} {...attributes}>
          {children}
        </ul>
      );
    case 'heading1':
      return (
        <h1 content-editable={'true'} {...attributes}>
          {children}
        </h1>
      );
    case 'heading2':
      return (
        <h2 content-editable={'true'} {...attributes}>
          {children}
        </h2>
      );
    case 'heading3':
      return (
        <h3 content-editable={'true'} {...attributes}>
          {children}
        </h3>
      );
    case 'heading4':
      return (
        <h4 content-editable={'true'} {...attributes}>
          {children}
        </h4>
      );
    case 'heading5':
      return (
        <h5 content-editable={'true'} {...attributes}>
          {children}
        </h5>
      );
    case 'heading6':
      return (
        <h6 content-editable={'true'} {...attributes}>
          {children}
        </h6>
      );
    case 'list-item':
      return (
        <li content-editable={'true'} {...attributes}>
          {children}
        </li>
      );
    case 'numbered-list':
      return (
        <ol content-editable={'true'} {...attributes}>
          {children}
        </ol>
      );
    case 'paragraph':
      return (
        <p content-editable={'true'} {...attributes}>
          {children}
        </p>
      );
    case 'pre':
      return (
        <pre content-editable={'true'} {...attributes}>
          {children}
        </pre>
      );
    case 'link':
      return <LinkElement {...props} url={element.url} />;
    default:
      return <DefaultElement {...props} />;
  }
}

function renderLeaf(props) {
  return <StyledText {...props} />;
}

export function useEditorConfig(editor) {
  const {isVoid} = editor;
  editor.isVoid = (element) => {
    return ['image'].includes(element.type) || isVoid(element);
  };

  editor.isInline = (element) => ['link'].includes(element.type);

  return {renderElement, renderLeaf};
}
