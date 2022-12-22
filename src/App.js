import React from "react";
import "./App.css";
import Shop from "./Components/Shop/Shop";
import courseData from "./FakeData/courseData";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Shop />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
