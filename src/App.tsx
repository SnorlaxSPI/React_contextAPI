/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {



  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/profile'>
          </Route>

          <Route path='/login'>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
};

export { App };
