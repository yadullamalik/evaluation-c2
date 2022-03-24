import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [show, setShow] = useState("");
  return (
    <div className="App">
      <button
        className="toggleForm"
        onClick={() => {
          setShow(!show);
        }}
      >
        {/* Show text Add House or Show Rentals based on state */}
        {show ? "Show House" : "Show Form"}
      </button>
      {show ? <AddHouse /> : <Rentals />}
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
