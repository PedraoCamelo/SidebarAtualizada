import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Componentes/navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar/>
        <Routes>
          <Route path='/'/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;