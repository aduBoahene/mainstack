import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SideNav from './components/SideNav';
import { NewDash } from './components/NewDash';


function App() {



  return (
    <Router>
    {/* <Header/> */}
    <div className="flex overflow-hidden">
      <SideNav/>
      <Switch>
        <Route exact path="/">
         <NewDash/>
        </Route>
        
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
