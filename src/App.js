import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Pages/Shared/Header";
import BillingPage from "./Pages/BillingPage";
import Login from "./Pages/Authenticatoin/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/billingPage" element={<BillingPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
