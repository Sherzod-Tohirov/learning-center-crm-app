import { sidebar } from "../../constants/constants";
import { ToggleBar } from "../../constants/svg";
import { Logo } from "../Logo";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
export function Sidebar() {
  const location = useLocation();
  return (
    <div className="max-w-[253px] w-full bg-[#2F49D1] py-[22px] min-h-screen">
      <div className="flex items-center justify-between pb-5 px-5 border-b-[1px] border-white">
        <Logo />
        <button>
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
            <Link
              to={item.route}
              className="flex items-center gap-4 pt-3 pr-1 pb-[5px] pl-5 w-full"
            >
              {item.svg}
              <span className="sidebar-text">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
