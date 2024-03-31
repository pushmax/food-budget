import './app.scss';

import { classNameBEM } from '@shared/styling/utils/bem_classname';
import * as React from 'react';

import Header from './ui/header/header';

const bem = classNameBEM('app');

export function App() {
  return (
    <div className={bem()}>
      <Header />
    </div>
  );
}