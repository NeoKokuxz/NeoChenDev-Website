import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/Home/index'


function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
