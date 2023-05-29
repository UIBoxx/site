import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MyProfile from "./components/contact";
import Footer from "./components/Footer";
import CSSDesigns from "./components/CssDesigns";
import Tutorials from "./tutorials/tutorial";
import BinarySearchTutorialsDetails from "./tutorials/binarysearchTutorial";
import LinearSearchTutorialsDetails from "./tutorials/linearSearchTutorial";
import BubbleSortTutorialsDetails from "./tutorials/bubsort";
import HeapSortTutorialsDetails from "./tutorials/HeapSortTutorial";
import ContactForm from "./components/contactForm";
import LandingPage from "./components/landingPage";
import StackTutorial from "./tutorials/stackTutorial";
import QueueTutorial from "./tutorials/QueueTutorial";
import DijkstraVisualization from "./tutorials/DijkstraVisualization";
import NewsPage from "./components/NewsPage";
import ButtonGenerator from "./tools/ButtonTool";
import InputGenerator from "./tools/InputTool";
import FlexboxGenerator from "./tools/flexBoxTool";
import NeumorphismCardGenerator from "./tools/NeuCard";
import GlassmorphismGenerator from "./tools/GlassMorCard";
import GradientBackgroundGenerator from "./tools/GradientBackgroundGenerator";
import SVGShapeGenerator from "./tools/svgshape";
import NewsSlider from "./components/BannerTutorialSlider";
import BackgroundGenerator from "./tools/BgGenTool";


type FunctionType = (...args: any[]) => void;

function debounce<T extends FunctionType>(func: T, wait: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(this: any, ...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  } as T;
}


function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(
        currentScrollPos <= prevScrollPos || currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <BrowserRouter basename="/">
      <div>
        {showNavbar && <Navbar />}
        <body>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SVGShapeGenerator />
                  <LandingPage />
                  <NewsSlider/>
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
              path="tools"
              element={
                <>
                  <NeumorphismCardGenerator />
                  <GlassmorphismGenerator />
                  <GradientBackgroundGenerator />
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
            <Route
              path="Tutorials"
              element={
                <>
                  <Tutorials />
                </>
              }
            />
            <Route
              path="/binary-search-tutorial"
              element={<BinarySearchTutorialsDetails />}
            />
            <Route
              path="/linear-search-tutorial"
              element={<LinearSearchTutorialsDetails />}
            />
            <Route
              path="/bubble-sort-tutorial"
              element={<BubbleSortTutorialsDetails />}
            />
            <Route
              path="/heap-sort-tutorial"
              element={<HeapSortTutorialsDetails />}
            />
            <Route path="/stack" element={<StackTutorial />} />
            <Route path="/queue" element={<QueueTutorial />} />
            <Route path="/dijkstra" element={<DijkstraVisualization />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="/button" element={<ButtonGenerator />} />
            <Route path="/input" element={<InputGenerator />} />
            <Route path="/flexbox" element={<FlexboxGenerator />} />
            <Route path="/bg" element={<BackgroundGenerator />} />
          </Routes>
        </body>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
