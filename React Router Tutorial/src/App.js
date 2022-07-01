import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Komponen/Home';
import Profile from './Komponen/Profile';
import About from './Komponen/About';
import AboutMe from './Komponen/AboutMe';
import ErrorPage from './Komponen/ErrorPage';

function App() {
  return (
    <Router>
      <nav className='navbar'>
        <Link to='/'>
          <img src="/text.png" alt="test logo" className='nav-mage'/>
        </Link>
        <div className='nav-div'>
        <Link to='/'>Home</Link>{/* Link fungsinya sama kek a href */}
        <Link to='/Profile'>Profile</Link>
        <Link to='/About'>About</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />{/* Route buat masukin komponen */}
        <Route path='/Profile/:username' element={<Profile />} />
        <Route path='/Profile/' element={<Profile />} />
        <Route path='/About' element={<About />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
