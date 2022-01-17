
import './App.css';
import { Provider } from 'react-redux';
import store from '../src/Redux/ReduxStore';
import Router from '../src/Router/Router';

function App() {
  return (
      <div>
        <Provider store={store}>
        <Router/>
        </Provider>
      </div>
  );
}

export default App;
