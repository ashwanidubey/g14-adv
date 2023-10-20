import logo from './logo.svg';
import './App.css';
import Showdata from './component/Showdata';
import Updatedata from './component/Updatedata';
import { Provider } from 'react-redux'
import store from './State/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Showdata />
       <Updatedata />
    </div>
   </Provider>
  );
}

export default App;
