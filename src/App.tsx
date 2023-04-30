import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Services from "./components/Services";
import MyProfile from "./components/contact";
import Footer from "./components/Footer";
import FlutterDesigns from "./components/FlutterDesigns";
import CSSDesigns from "./components/CssDesigns";
import SubscribeForm from "./components/subscribe";

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
                  < SubscribeForm/>
                </>
              }
            />
            <Route path="App-Designs" element={<FlutterDesigns />} />
            <Route path="Web-Designs" element={<CSSDesigns />} />
            <Route path="Contact" element={<MyProfile />} />
          </Routes>
        </body>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
