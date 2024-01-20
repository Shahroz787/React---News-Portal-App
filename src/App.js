import React from "react";
import Header from "./Components/Common/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Screens/HomeScreen/HomePage";
import Footer from "./Components/Common/Footer/Footer";
import Culture from "./Components/Culture/Culture";
import SinglePage from "./Components/Screens/SinglePage/SinglePage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/culture" element={<Culture />} />
          <Route exact path="/singlepage/:id" element={<SinglePage />} />
          <Route exact path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
