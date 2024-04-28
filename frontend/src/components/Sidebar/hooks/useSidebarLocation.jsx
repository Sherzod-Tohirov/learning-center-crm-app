import { Link, useLocation } from "react-router-dom";
export function useSidebarLocation() {
  const location = useLocation();

  return { Link, location };
}
