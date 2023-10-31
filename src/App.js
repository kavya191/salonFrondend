import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';

import Contact from './Pages/Contact';
import Inquiry from './Pages/Inquiry';
import Salonabout from './Pages/Salonabout';
import Services from './Pages/Services';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/about' element={<Salonabout/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/inquiry' element={<Inquiry/>}></Route>
        <Route path='/service' element={<Services/>}></Route>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
