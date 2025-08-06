import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import AllSideGigs from "./pages/AllSideGigs";
import AllCollections from "./pages/AllCollection";
import ProjectDetails from "./pages/ProjectDetails";
import SideGigDetails from "./pages/SideGigsDetails";
import ScrollToTop from "./components/ScrollToTop"; // 👈 import here
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
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
      <Footer />
    </div>
  );
}

export default App;
