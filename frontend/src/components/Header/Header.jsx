import { useLocation } from "react-router-dom";
import { headerTitles } from "../../constants/constants";
import "./header.css";
export function Header() {
  const { pathname } = useLocation();
  return (
    <div role="header" className="bg-white py-5 px-8 w-full">
      <h1 className="title">
        {headerTitles.map(({ route, title }) => (route == pathname ? title : ""))}
      </h1>
    </div>
  );

}
