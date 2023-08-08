import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login";
import View from "./Component/View";
import Edit from "./Component/Edit";
import Default from "./Component/Default";
import ContextState from "./Component/ContextState";
import Navbar from "./Component/Navbar";
import HomeComponent from "./Component/HomeComponent";
import { useEffect } from "react";
import Counter from "./Practics.js/Counter";
import Memo from "./Component/Memo";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <ContextState>
          <NetworkstatusListner />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/view" element={<View />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Default />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/memo" element={<Memo/>} />
          </Routes>
        </ContextState>
      </>
    </BrowserRouter>
  );
}
const NetworkstatusListner = () => {
  const navigate = useNavigate();

  const handleOnline = () => {
    navigate("/");
  };

  const handleOffline = () => {
    navigate("*");
  };

  useEffect(() => {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
    // eslint-disable-next-line
  }, []);

  return null; // Return null as this component doesn't render anything
};

export default App;
