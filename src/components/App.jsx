import Routing from 'Routing';
import React, { useEffect } from 'react';

import useAuth from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? <b>Refreshing user...</b> : <Routing />}
      <ToastContainer />
    </>
  );
};

export default App;
