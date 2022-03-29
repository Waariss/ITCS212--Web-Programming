import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Menu from "./components/menu";
import NavBar from "./components/navbar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} /> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;
