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
import AllTools from "./tools/tools";

function App() {
  return (
    <BrowserRouter basename="/">
      <div>
        <Navbar/>
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
                <AllTools/>
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
            <Route path="/neubox" element={<NeumorphismCardGenerator />} />
            <Route path="/glassbox" element={<GlassmorphismGenerator />} />
            <Route path="/Color-Gradient" element={<GradientBackgroundGenerator />} />

          </Routes>
        </body>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
