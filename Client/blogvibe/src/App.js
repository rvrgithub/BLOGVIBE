import { useEffect, useState } from "react";
import "./App.css";
// import { Navbar } from './Components/Navbar';
import { AdminNav } from "./Components/Navbar/AdminNav";
// import { UserNav } from "./Components/Navbar/UserNav";
import { Footer } from "./Pages/Footer";
import { AllRoutes } from "./Routes/AllRoutes";
export const apiurl = "http://localhost:4500";
function App() {
  const [routeName, setRouteName] = useState();
  useEffect(() => {
    setRouteName(window.location.href.split("/")[3]);
  },[]);
  console.log(routeName);
  return (
    <div className="App">
      {/* <AdminNav/> */}
      {routeName !== "login"  && routeName !== "register"  && <AdminNav/>}
      <AllRoutes />
      {routeName !== "login" && routeName !== "register"  && <Footer />}
    </div>
  );
}

export default App;
