import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
