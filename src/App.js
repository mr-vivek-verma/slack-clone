import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="App">
      <h1>Welcome Vivek Verma⭐</h1>
      <Header />
      <div className="app_body">
        <Sidebar />
        {/* {React-Router-> chat screen} */}
      </div>
    </div>
  );
}

export default App;
