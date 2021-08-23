import { useAtom } from 'jotai';
import { ChangeEventHandler } from 'react';

import { fieldAtomFamily } from './atoms';

export function useField(props) {
  const { name, initialValue } = props;
  const [field, setField] = useAtom(
    fieldAtomFamily({ name, value: initialValue })
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;

    setField((old) => {
      return {
        ...old,
        value,
      };
    });
  };

  return {
    value: field.value,
    onChange: handleChange,
  };
}
