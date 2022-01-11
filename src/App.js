
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Registeration from './pages/signup/Registeration';
import {BrowserRouter ,Switch, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import { Provider } from 'react-redux';
import store from '../src/Redux/ReduxStore';

function App() {
  return (
      <div>
        <Provider store={store}>
        <BrowserRouter>
        <Switch>
        <Route  exact path ='/' component={Login}/> 
       <Route path ='/Signup' component={Registeration}/> 
      <Route path ='/Dashboard' component={Dashboard}/> 
          </Switch>
        </BrowserRouter> 
        </Provider>
       {/* <Dashboard/> */}
      </div>
  );
}

export default App;
