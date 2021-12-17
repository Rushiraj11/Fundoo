
import { Router } from 'react-router';
import './App.css';
 import Dashboard from './pages/Dashboard/Dashboard';
import Registeration from './pages/signup/Registeration';
 import Login from './pages/Login/Login';
import Forget from './pages/Forget/Forget';
import Reset from './pages/Reset/Reset';
 import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Note from './Components/Notes/Note';
 


function App() {
  return (
    // <BrowserRouter>
   // <Routes>
    <div className="App">
       {/* <Route path ='/' component={Registeration}> </Route>
       <Route path ='/Login' component={Login}> </Route>
      <Route path ='/Forget' component={Forget}> </Route>
      <Route path ='/Reset' component={Reset}> </Route>  */}
      <Dashboard car="Merceds" />
    </div>
    // </Routes>
      // </BrowserRouter>
  );
}

export default App;
