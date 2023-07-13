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
          <Route path="/honey" element={<Main />} />
          <Route path="/sign_up" element={<Login />} />
        </Routes>
    </Router>
    );
}
export default App;