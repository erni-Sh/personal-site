'use client';

import { Provider } from 'react-redux';
import store from '@/redux/store/store';
import { FC, JSX } from 'react';

interface ProvidesProps {
  children: JSX.Element;
}

const Providers: FC<ProvidesProps> = ({ children }) => {
  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
};

export default Providers;