import "./App.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="container">
            Content is here.
        </div>
      </div>
    </>
  );
}

export default App;
