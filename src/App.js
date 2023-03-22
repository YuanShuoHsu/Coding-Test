import './App.css';

import { Routes, Route, Navigate } from "react-router-dom"

import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="profile">
          <Route path="" element={<Profile />} />
          <Route path="*" element={<Navigate replace to="" />} />
        </Route>
        <Route path="*" element={<Navigate replace to="" />} />
      </Routes>
    </div>
  );
}

export default App;
