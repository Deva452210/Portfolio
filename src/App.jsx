import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import AllSideGigs from "./pages/AllSideGigs";
import AllCollections from "./pages/AllCollection";
import ProjectDetails from "./pages/ProjectDetails";
import SideGigDetails from "./pages/SideGigsDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/allsidegigs" element={<AllSideGigs />} />
          <Route path="/allcollections" element={<AllCollections />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/sidegig/:id" element={<SideGigDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
