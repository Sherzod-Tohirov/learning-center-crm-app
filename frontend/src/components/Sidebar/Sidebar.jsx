import "./sidebar.css";
import { sidebar } from "../../constants/constants";
import { ToggleBar } from "../../constants/svg";
import { Logo } from "../Logo";
import { handleSidebarOpen } from "./utils";
import { useSidebarOpen } from "./hooks/useSidebarOpen";
import { useSidebarLocation } from "./hooks/useSidebarLocation";
export function Sidebar() {
  const { Link, location } = useSidebarLocation();
  const { sidebarOpen, setSidebarOpen, sidebarRef } = useSidebarOpen();
  return (
    <div className={`sidebar`} ref={sidebarRef}>
      <div className="flex items-center justify-between pb-5 px-5 border-b-[1px] border-white">
        {sidebarOpen ? <Logo isTextVisible={sidebarOpen} /> : ""}
        <button
          className="active:scale-95 transition-all duration-200 min-h-[60px]"
          onClick={(e) => handleSidebarOpen(e, sidebarRef, setSidebarOpen)}
        >
          <ToggleBar />
        </button>
      </div>
      <ul className="pt-8 flex flex-col gap-[10px] sticky top-[-10px]">
        {sidebar.map((item) => (
          <li
            key={item.id}
            className={`w-full flex relative ${
              location.pathname === item.route
                ? " active-item "
                : "hover:bg-blue-600"
            }`}
          >
            <Link to={item.route} className="sidebar-link">
              {item.svg}
              {sidebarOpen ? (
                <span className="sidebar-text">{item.title}</span>
              ) : (
                ""
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
