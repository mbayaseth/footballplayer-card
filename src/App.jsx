import React from "react";
import "./App.css";
import PlayersList from "./components/PlayerList";

function App() {
  return (
    <div className="container-lg py-5 px-5 justify-center ">
      <h1
        class=" flex justify-center p-10 shadow-lg "
        style={{ backgroundColor: "gray", height: "100px" }}
      >
        Football Players List
      </h1>

      <div className="  App flex justify-center p-20 shadow-xl">
        <PlayersList />
      </div>
    </div>
  );
}

export default App;
