import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import AppBar  from '../AppBar/AppBar';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import css from './Layout.module.css'

export const Layout = () => {
  return (
    <div className={css.wrapper} >
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};