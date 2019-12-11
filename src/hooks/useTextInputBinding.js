import { useState } from 'react';

export default function useTextInputBinding(defaultText) {
  let [text, setText] = useState(defaultText || '');

  function bindText(event) {
    setText(event.target.value);
  }

  return [text, bindText];
}