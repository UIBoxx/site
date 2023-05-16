import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MyProfile from "./components/contact";
import Footer from "./components/Footer";
import FlutterDesigns from "./components/FlutterDesigns";
import CSSDesigns from "./components/CssDesigns";
import Tutorials from "./components/tutorial";
import BinarySearchTutorialsDetails from "./components/binarysearchTutorial";
import LinearSearchTutorialsDetails from "./components/linearSearchTutorial";
import BubbleSortTutorialsDetails from "./components/bubsort";
import HeapSortTutorialsDetails from "./components/HeapSortTutorial";

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
                  {/* <FlutterDesigns /> */}
                </>
              }
            />
            <Route
              path="UI-Library"
              element={
                <>
                  <CSSDesigns />
                </>
              }
            />
            <Route
              path="Contact"
              element={
                <>
                  <MyProfile />{" "}
                </>
              }
            />
            {/* <Route path="upload" element={<SubForm />} /> */}
            <Route path="Tutorials" element={<Tutorials />} />
            <Route
              path="binary-search-tutorial"
              element={<BinarySearchTutorialsDetails />}
            />
            <Route
              path="linear-search-tutorial"
              element={<LinearSearchTutorialsDetails />}
            />
            <Route
              path="bubble-sort-tutorial"
              element={<BubbleSortTutorialsDetails />}
            />
            <Route
              path="heap-sort-tutorial"
              element={<HeapSortTutorialsDetails />}
            />
          </Routes>
        </body>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
