
import './App.css';
import './components/fonts/icomoon/style.css'
import Navbar from "./components/navbar";
import Carousel from './components/carousel'; 
import Display from './components/tvdisplay';
import Channels from './components/channels';
import Footer from './components/footer';
import Geonews from './components/geonews';
import Arynews from './components/Arynews';
import Asports from './components/Asports';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
// custom css
import "./index.css";
import "./components/css/style.css";
import "./components/css/animate.css";
import "./components/css/bootstrap.min.css";
import Tensports from './components/Tensports';
import Willow from './components/Willow';
import Startv from './components/Startv';
import Ptvsports from './components/Ptvsports';
import Geosuper from './Geosuper';
import Contact from './components/Contact';
import Skysports from './components/Skysports';
import Btsports from './components/Btsports';
import Tamasha from './components/Tamasha';



function App() {
  return (
   <>
    <Router>
    <Navbar/>
    <Carousel/>
    <Routes>
      <Route path='/' element={<Display/>} exact />
      <Route path='/Display' element={<Display />} />
      <Route path='/Geonews' element={<Geonews/>} />
      <Route path='/Arynews' element={<Arynews/>} />
      <Route path='/Asports' element={<Asports/>} />
      <Route path='/Tensports' element={<Tensports/>} />
      <Route path='/Willow' element={<Willow/>} />
      <Route path='/Startv' element={<Startv/>} />
      <Route path='/Ptvsports'  element={<Ptvsports/>} />
      <Route path='/Geosuper' element={<Geosuper/>} />
      {/* <Route path='/' element={<Channels title='active-tv-btn'/>} exact/> */}
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Skysports' element={<Skysports/>}/>
      <Route path='/Btsports' element={<Btsports/>}/>
      <Route path='/Tamasha' element={<Tamasha/>}/>
    </Routes>
    <Channels />
    <Footer/>
    </Router>
   </>
  );
}

export default App;
