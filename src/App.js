import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';

import CreateTokenPage from './pages/createToken';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateTokenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
