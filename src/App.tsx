import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./Dashboard";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
