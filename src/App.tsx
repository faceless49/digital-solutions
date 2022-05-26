import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './scss/app.scss';
import { Header } from 'components';
import { FullPost, FullProfile, Home, PostsList } from 'pages';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => (
  <div className="container">
    <Header />
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="user/:userId" element={<FullProfile />} />
      <Route path="user/:userId/postslist" element={<PostsList />} />
      <Route path="user/:userId/postslist/:postId" element={<FullPost />} />
    </Routes>
  </div>
);

export default App;
