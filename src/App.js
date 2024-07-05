import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Authorization from './Pages/Authorization';
import Main from './Pages/Main';
import AddPost from './Pages/AddPost';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Authorization setUserAuthenticated={setAuthenticated} />} />
          <Route path="/main" element={authenticated ? <Main /> : <Navigate to="/login" />} />
          <Route path="/add-post" element={authenticated ? <AddPost /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
