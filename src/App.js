import React from "react";
import Form from "./Form";
import Footer from "./Footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Form defaultCity="Malaga" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
