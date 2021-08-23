import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

import { FieldNamesAtom, Field } from './types';

export const fieldNamesAtom = atom<FieldNamesAtom>([]);

export const fieldAtomFamily = atomFamily(
  (field: Field) => atom(field),
  (a: Field, b: Field) => a.name === b.name
);
