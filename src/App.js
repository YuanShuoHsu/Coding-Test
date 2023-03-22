import { Suspense } from 'react';
import './App.css';

import { Routes, Route, Navigate } from "react-router-dom"

import Home from './pages/Home';
import Profile from './pages/Profile';

import PrivateRoute from "./components/PrivateRoute"

function App() {

  const isAuthenticated = true; // 假設使用者已經登入，這邊直接設為 true。

  return (
    <Suspense fallback="loading">
      <div className="App">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="profile">
            <Route path="" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate replace to="" />} />
          </Route>

          <Route path="*" element={<Navigate replace to="" />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
