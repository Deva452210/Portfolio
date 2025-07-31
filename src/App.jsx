import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import AllSideGigs from "./pages/AllSideGigs";
import AllCollection from "./pages/AllCollection";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/sidegigs" element={<AllSideGigs />} />
          <Route path="/collections" element={<AllCollection />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
