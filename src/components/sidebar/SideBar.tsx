import React, { createContext, useContext, useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdAccountBox, MdDynamicFeed } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RiSkipLeftLine } from "react-icons/ri";

// Define the type for context values
interface SidebarContextType {
  expanded: boolean;
  activePath: string;
  setActivePath: (path: string) => void;
}

// Create the context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [activePath, setActivePath] = useState<string>("");

  const menuItems = [
    { text: "Dashboard", icon: <RxDashboard size={22} />, path: "/dashboard" },
    { text: "Feed", icon: <MdDynamicFeed size={22} />, path: "/profile/feed" },
    { text: "Account", icon: <MdAccountBox size={22} />, path: "/profile/account" },
  ];

  return (
    <SidebarContext.Provider value={{ expanded, activePath, setActivePath }}>
      <aside className="h-screen flex">
        <nav className="h-full flex flex-col bg-teal-600 border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="px-3 py-1 rounded-full bg-neutral-200"
            >
              {expanded ? <RiSkipLeftLine size={18} /> : <AiOutlineMenuUnfold size={18} />}
            </button>
          </div>
          <div className="mt-5">
            <ul className="flex-1 px-3 space-y-3">
              {menuItems.map((item, index) => (
                <SidebarItem key={index} text={item.text} icon={item.icon} path={item.path} />
              ))}
            </ul>
          </div>
        </nav>
        <main className="flex-grow p-4">{children}</main>
      </aside>
    </SidebarContext.Provider>
  );
};

// Define the type for SidebarItem props
interface SidebarItemProps {
  icon: JSX.Element;
  text: string;
  path: string;
}

// Define the SidebarItem component
const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, path }) => {
  const { expanded, activePath, setActivePath } = useContext(SidebarContext) as SidebarContextType;
  const location = useLocation();
  const isActive = location.pathname === path;

  const handleClick = () => {
    setActivePath(path);
  };

  return (
    <li>
      <Link to={path}>
        <div
          className={`flex items-center py-2 px-3 font-medium rounded-md cursor-pointer transition-colors group hover:bg-black text-white ${isActive ? "bg-black text-white" : ""}`}
          onClick={handleClick}
        >
          <div className={expanded ? "mr-2" : ""}>{icon}</div>
          <div className={`overflow-hidden transition-all ${expanded ? "w-[130px] ml-1 animate-slideIn" : "w-0 animate-slideOut"}`}>
            {text}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Sidebar;
