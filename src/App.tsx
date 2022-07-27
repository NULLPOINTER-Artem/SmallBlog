import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '@/components/HomePage';
import PostsPage from '@/components/PostsPage';
import PostPage from '@/components/PostPage';
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='posts' element={<PostsPage />} />
          <Route path='posts/:id' element={<PostPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}