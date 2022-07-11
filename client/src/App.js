import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Websites from "./pages/Websites";
import Documentation from "./pages/Documentation";
import Affiliates from "./pages/Affiliates";
import Support from "./pages/Support";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/websites" element={<Websites />}></Route>
            <Route path="/documentation" element={<Documentation />}></Route>
            <Route path="/affiliates" element={<Affiliates />}></Route>
            <Route path="/support" element={<Support />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
