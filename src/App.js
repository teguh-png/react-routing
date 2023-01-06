import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import About from "./pages/About";
import First from "./components/First";
import Second from "./components/Second";

function App() {
  return (
    <BrowserRouter>
    <nav >
      <Link to="/" >Home</Link>{` `}
      <Link to="about" >About</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />}> /</Route>
        <Route path="/About" element={<About />} >
          <Route path={"first"} element={<First />} />
          <Route path={"second"} element={<Second />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
