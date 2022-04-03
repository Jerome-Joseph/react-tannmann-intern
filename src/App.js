import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignUp from './components/SignUp';

function App() {

  return (
    <div className="app">
    <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/done">
              <h3 className='text-center mt-5'>Logged in</h3>
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>     
  </Router>
  </div>
  );
}

export default App;
