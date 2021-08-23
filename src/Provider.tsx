import React from 'react';
import { Provider as JotaiProvider } from 'jotai';

export function Provider(props: any) {
  return <JotaiProvider {...props} />;
}
