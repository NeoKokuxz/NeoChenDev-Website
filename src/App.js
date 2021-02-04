import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/Home/index'
import DisplaySection from './components/DisplaySection'


function App() {
  return (
    <Router>
      <HomePage />
      <DisplaySection />

    </Router>
  );
}

export default App;
