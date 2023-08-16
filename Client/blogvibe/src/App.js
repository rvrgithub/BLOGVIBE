import './App.css';
// import { Navbar } from './Components/Navbar';
import { AdminNav } from './Components/Navbar/AdminNav';
import { UserNav } from './Components/Navbar/UserNav';
import {Footer} from './Pages/Footer';
import { AllRoutes } from './Routes/AllRoutes';
export const apiurl ="http://localhost:4500"
function App() {
  return (
    <div className="App">
    <AdminNav/>
    {/* <UserNav/> */}
    <AllRoutes/>
    <Footer/>
    </div>
  );  
}

export default App;