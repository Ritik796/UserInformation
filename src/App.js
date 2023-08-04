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
          </Routes>
        </ContextState>
      </>
    </BrowserRouter>
  );
}
    const NetworkstatusListner = () => {
      const navigate = useNavigate();
      useEffect(() => {
        const Handleonline = () => {
          navigate("/");
          return;
        };
        const HandleOffline = () => {
          navigate("*");
          return;
        };
        const HandleONlineEvent =()=>{
          Handleonline()
        }
        const HandleOfflineVent =()=>{
          HandleOffline()
        }
        if (!navigator.onLine===true) {
          window.addEventListener("offline", HandleOfflineVent);
          window.addEventListener("online", HandleONlineEvent);
          return;
        }
        return () => {
          window.removeEventListener("offline", HandleOfflineVent);
          window.removeEventListener("online", HandleONlineEvent);
        };
      }, [navigate]);
      return null
    };

export default App;
