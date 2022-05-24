import React from 'react';

import { Header } from 'components/Header';
import { UserBlock } from 'components/UserBlock';
import { ReturnComponentType } from 'types';
import './scss/app.scss';

export const App = (): ReturnComponentType => (
  <div className="App">
    <Header />
    <div>
      <h5>Twenty Pistols</h5>
    </div>
    <div>
      <UserBlock city="Egor" name="Egor" surname="Kolesnikov" />
    </div>
  </div>
);

export default App;
