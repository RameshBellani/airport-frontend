import "./App.css";

import Sidebar from "./Components/SideBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Body from "./Components/Bodypart";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="d-flex flex-row w-100 container-item">
        <Sidebar />
        <Routes>
          <Route exact path="/Airports" Component={Body} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;