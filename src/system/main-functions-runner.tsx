"use client"

import React, { FC, JSX } from 'react';
import ResizeListener from '@/system/services/resize-llistener';
import ScrollListener from '@/system/services/scroll-listener';

const MainFunctionsRunner: FC = (): JSX.Element => {
  return (<>
    <ResizeListener />
    <ScrollListener />
  </>);
};

export default MainFunctionsRunner;