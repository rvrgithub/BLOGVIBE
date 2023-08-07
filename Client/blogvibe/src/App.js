import './App.css';
// import { Navbar } from './Components/Navbar';
import { AdminNav } from './Components/Navbar/AdminNav';
import {Footer} from './Pages/Footer';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
    <AdminNav/>
    <AllRoutes/>
    <Footer/>
    </div>
  );  
}

export default App;



// ........   target   ....... 
//  - navbar 
//  - footer  copy [docs]  : one secction done ->  now time is second section wytnow  done both 
//  - register 
//  - login 
//  - admin all side  .... >
//  - style merger 2 code 
//  - create google docs for study -> done  
//  - 