import './App.css';
import { Navbar } from './Components/Navbar';
import { AdminNav } from './Components/Navbar/AdminNav';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
    <AdminNav/>
    <AllRoutes/>
    </div>
  );
}

export default App;
