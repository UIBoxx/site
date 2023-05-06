import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Services from "./components/Services";
import MyProfile from "./components/contact";
import Footer from "./components/Footer";
import FlutterDesigns from "./components/FlutterDesigns";
import CSSDesigns from "./components/CssDesigns";
import SubscribeForm from "./components/subscribe";
import SubForm from "./components/form";

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
                  <CSSDesigns />
                </>
              }
            />
            <Route path="App-Designs" element={<FlutterDesigns />} />
            <Route path="Contact" element={<><MyProfile /> < SubscribeForm/></>} />
            <Route path="upload" element={<SubForm />} />
          </Routes>
        </body>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
