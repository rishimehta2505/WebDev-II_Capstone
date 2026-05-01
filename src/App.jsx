import { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <div style={{ paddingBottom: "70px" }}>
        {page === "home" ? <Home /> : <Dashboard />}
      </div>

      <div className="bottom-nav">
        <button onClick={() => setPage("home")}> Home</button>
        <button onClick={() => setPage("dashboard")}> Dashboard</button>
      </div>
    </div>
  );
}

export default App;