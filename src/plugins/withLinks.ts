import {ElementType} from '../models';
import {ReactEditor} from 'slate-react';
import isUrl from 'is-url';
import {wrapLink} from '../transforms';

export const withLinks = (editor: ReactEditor): ReactEditor => {
  const {insertData, insertText, isInline} = editor;

  editor.isInline = (element) => {
    // @ts-ignore
    return (element.type as ElementType) === 'link' ? true : isInline(element);
  };

  editor.insertText = (text) => {
    if (text && isUrl(text)) {
      wrapLink(editor, text, true);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data: DataTransfer) => {
    const text = data.getData('text/plain');

    if (text && isUrl(text)) {
      wrapLink(editor, text, true);
    } else {
      insertData(data);
    }
  };

  return editor;
};
