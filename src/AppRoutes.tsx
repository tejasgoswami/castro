import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './components/common/PageNotFound';

const Login = React.lazy(() => import('./components/login/Login'));
const Signup = React.lazy(() => import('./components/signup/Signup'));
const Blog = React.lazy(() => import('./components/blog/Blog'));
const HomePage = React.lazy(() => import('./components/dashboard/Dashboard'));

const  AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;