import React from "react";
import PublicRoutes from "./routes/public-routes";
import Header from "./components/Header";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PublicRoutes />
    </div>
  );
}

export default App;
