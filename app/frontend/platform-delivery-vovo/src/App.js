import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css'
import Home from './pages/home';
import Menu from './pages/menu';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/menu' element={ <Menu/> } />
      </Routes>
    </Router>
  );
}

export default App;
