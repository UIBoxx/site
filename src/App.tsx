import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MyProfile from "./components/contact";
import Footer from "./components/Footer";
import CSSDesigns from "./components/CssDesigns";
import Tutorials from "./components/tutorial";
import BinarySearchTutorialsDetails from "./components/binarysearchTutorial";
import LinearSearchTutorialsDetails from "./components/linearSearchTutorial";
import BubbleSortTutorialsDetails from "./components/bubsort";
import HeapSortTutorialsDetails from "./components/HeapSortTutorial";
import ContactForm from "./components/contactForm";
import LandingPage from "./components/landingPage";
import StackTutorial from "./components/stackTutorial";
import QueueTutorial from "./components/QueueTutorial";
import DijkstraVisualization from "./components/DijkstraVisualization";
import TutorialBannerSlider from "./components/BannerTutorialSlider";
import NewsPage from "./components/NewsPage";
import ButtonGenerator from "./components/ButtonTool";
import InputGenerator from "./components/InputTool";

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
                  <LandingPage />
                  <TutorialBannerSlider/>
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
                  <MyProfile />
                  <ContactForm />
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
            <Route
              path="stack"
              element={<StackTutorial />}
            />
            <Route
              path="queue"
              element={<QueueTutorial />}
            />
             <Route
              path="dijkstra"
              element={<DijkstraVisualization />}
            />
            <Route
              path="news"
              element={<NewsPage/>}
            />
            <Route
              path="tools/button"
              element={<ButtonGenerator/>}
            />
            <Route
              path="tools/input"
              element={<InputGenerator/>}
            />
          </Routes>
        </body>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
