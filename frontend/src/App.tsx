import React from 'react';
import { Route} from "react-router-dom";
import Auth from './pages/Auth';
import Home from './pages/Home';

function App() {
  return (

      <>
        <Route path="/" exact component={Home}></Route>     
      </>
  
  );
}

export default App;
