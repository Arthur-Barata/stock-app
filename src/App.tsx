import { useEffect } from "react";
import "./App.css";
import { MainRoutesTree } from "./routes";
import { initFakeDb } from "./utils/fake-database/fake-databse";

function App() {
  useEffect(() => {
    const users = sessionStorage.getItem("users");
    if (!users) {
      initFakeDb();
    }
  }, []);
  return (
    <div className="App">
      <MainRoutesTree></MainRoutesTree>
    </div>
  );
}

export default App;
