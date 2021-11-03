import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './Nav';



function App() {
  return (
   <>
   <Router>
     <Switch>
      <Route path="/" exact component={Nav}/>
     </Switch>
   </Router>
   </>
  );
}

export default App;
