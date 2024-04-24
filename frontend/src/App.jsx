import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import { Notifications } from "@welcome-ui/toast";
function App() {
  return (
    <>
      <div className="flex items-stretch">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <Outlet />
        </div>
      </div>
      <Notifications pauseOnHover={false}  />
    </>
  );
}

export default App;
