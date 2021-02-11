import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/index'
import DisplaySection from './components/DisplaySection'



function App() {
  return (
    <Router >
      <DisplaySection/>
      <HomePage />
    </Router>
  );
}

export default App;
