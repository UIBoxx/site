import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Services from "./components/Services";
import MyProfile from "./components/contact";
import Footer from "./components/Footer";
import FlutterDesigns from "./components/FlutterDesigns";
import CSSDesigns from "./components/CssDesigns";
import SubscribeForm from "./components/subscribe";
import SubForm from "./components/form";
import Tutorials from "./components/tutorial";
import BinarySearchTutorialsDetails from "./components/binarysearchTutorial";

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
                  <CSSDesigns />
                  {/* <Services /> */}
                </>
              }
            />
            <Route path="App-Designs" element={<FlutterDesigns />} />
            <Route path="Contact" element={<><MyProfile /> < SubscribeForm/></>} />
            <Route path="upload" element={<SubForm />} />
            <Route path="Tutorials" element={<Tutorials/>} />
            <Route path="binary-search-tutorial" element={<BinarySearchTutorialsDetails/>} />
          </Routes>
        </body>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
