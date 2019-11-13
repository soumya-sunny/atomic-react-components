// @flow
import type { Node } from 'react';
import type { Props as InputProps } from '../../../atoms/Input';
import type { Props as ButtonProps } from '../../../atoms/Button';

export type Props = {
  children: Node,
  className?: string,
  onSearch?: Function,
  onSpeechStart?: Function,
  onSpeechEnd?: Function,
  inputProps?: InputProps,
  searchButtonProps?: ButtonProps,
  speechButtonProps?: ButtonProps,
  lang?: String,
};

export type SpeechRecognition = {
  onresult: Function,
  onend: Function,
  abort: Function,
  stop: Function,
  start: Function,
  lang?: String,
};