import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import User from './Pages/User';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = {
              {
                pathname : "/about ",
                state : {
                  from : "root"
                }
              }
            }>About</Link></li>
            <li><Link to = "/user/john/johnson">User</Link></li>
          </ul>
          <div>
            <Routes>
              <Route path = "/" element={<Home/>}></Route>
              <Route path = "/about" element={<About/>}></Route>
              <Route path = "/user/:firstname/:lastname" element={<User/>}></Route>
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
