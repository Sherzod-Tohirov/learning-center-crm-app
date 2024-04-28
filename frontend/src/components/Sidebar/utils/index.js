export function handleSidebarOpen(e, sidebarRef, setSidebarOpen) {
    e.target.closest("button").classList.toggle("rotate-180");
    sidebarRef.current.classList.toggle("max-w-[75px]");
    setSidebarOpen((prev) => !prev);             
  }