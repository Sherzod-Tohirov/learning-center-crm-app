import { Contact } from "../../constants/svg";
import './logo.css';
export function Logo() {
    return (
       <div className="flex items-center gap-5">
           <div className="flex place-items-center w-12 h-12 p-2 pl-[10px] rounded-full bg-[#315996]">
              <Contact />
           </div>
           <span className="logo-text">CRM PANEL</span>
       </div> 
    )
}