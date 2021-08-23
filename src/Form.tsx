import React, { HTMLAttributes, ReactChild } from 'react';
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

export function Form(props: Props) {
  const [count, setCount] = useAtom(countAtom);
  return (
    <h1>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>one up</button>
      {props.children}
    </h1>
  );
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}
