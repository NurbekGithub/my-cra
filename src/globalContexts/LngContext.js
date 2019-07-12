import React, { useState } from 'react';
import {DEFAULT_LOCALE} from '../config/constants';

export const LngContext = React.createContext([DEFAULT_LOCALE]);

export default function LngContextProvider({ children }) {
  const [lng, setLng] = useState(DEFAULT_LOCALE);
  return (
    <LngContext.Provider value={[lng, setLng]}>{children}</LngContext.Provider>
  );
}
