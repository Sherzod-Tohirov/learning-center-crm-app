import { useRef, useState } from "react";

export function useSidebarOpen() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarRef = useRef();
  
  return { sidebarOpen, setSidebarOpen, sidebarRef };
}
