import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import SideGigsDetails from "./pages/SideGigsDetails";
import AllSideGigs from "./pages/AllSideGigs";
import AllCollections from "./pages/AllCollection";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/sidegigsdetails" element={<SideGigsDetails />} />
          <Route path="/allsidegigs" element={<AllSideGigs />} />
          <Route path="/allcollections" element={<AllCollections />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
