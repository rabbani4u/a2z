import React from "react";
import Shop from "./Components/Shop/Shop";
import courseData from "./FakeData/courseData";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Shop />
    </div>
  );
}

export default App;
