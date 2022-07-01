import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Pages/Shared/Header";
import BillingPage from "./Pages/BillingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/billingPage" element={<BillingPage />} />
      </Routes>
    </div>
  );
}

export default App;
