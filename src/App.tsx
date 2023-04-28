import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Services from "./components/Services";
import MyProfile from "./components/contact";
import Footer from "./components/Footer";
import MyProjects from "./components/projects";
import Designs from "./components/Designs";
import FlutterDesigns from "./components/FlutterDesigns";
import CSSDesigns from "./components/CssDesigns";

function App() {
  return (
    <BrowserRouter basename="/">
      <div>
        <Navbar />
        <body>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Services />
                </>
              }
            />
            <Route path="App-Designs" element={<FlutterDesigns />} />
            <Route path="Web-Designs" element={<CSSDesigns />} />
            {/* <Route path="Projects" element={<MyProjects />} /> */}
            <Route path="Contact" element={<MyProfile />} />
          </Routes>
        </body>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
