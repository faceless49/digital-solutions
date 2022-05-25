import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Header } from 'components/Header';
import { FullPost } from 'pages/FullPost';
import { FullProfile } from 'pages/FullProfile';
import { Home } from 'pages/Home';
import { PostsList } from 'pages/PostsList';
import { ReturnComponentType } from 'types';
import './scss/app.scss';

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
