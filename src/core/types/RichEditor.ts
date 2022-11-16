import {HistoryEditor} from 'slate-history/dist/history-editor';
import {ReactEditor} from 'slate-react';

export type RichEditor<T = {}> = HistoryEditor & ReactEditor & T;
