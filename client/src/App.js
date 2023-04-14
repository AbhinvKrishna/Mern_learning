import './App.css';
import Navbar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Errorpage from './Errorpage';
function App() {
  return (
    <div>
      <>
    <BrowserRouter>
    <Navbar/>
          <Routes>
          <Route exact path="/" element={ <Home/>} /> {/* exact is used to guide on specific path */}        
            <Route exact path="/about" element={<About />} /> {/* exact is used to guide on specific path */}
            <Route exact path="/contact" element={< Contact/>} />
            <Route exact path="/signup" element={< Signup/>} />
            <Route exact path="/login" element={< Login/>} />
            <Route path='*' element={< Errorpage/>} />
          </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
