import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./Dashboard";
import Home from "./pages/Home";
import BeanById from "./pages/BeanById";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path=":beanId" element={<BeanById/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
