import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './Splash.js';
import Main from './Main.js';
import Login from './Login.js';
import './font.css'
import './style.css'

function App() {
    return(
      <Router> 
        <Routes>
          <Route path="/" exact={true} element={<Splash />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
    </Router>
    );
}
export default App;