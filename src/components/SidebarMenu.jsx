import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export function SidebarMenu() {
  return (
    
    <div className="sidebar hidden sm:flex fixed bg-gray-200 min-w-[100px]  justify-center pt-24 min-h-full">
      <nav className="">
        <ul className=" flex flex-col gap-9 text-2xl text-gray-500">
          <li className={`navItem`}>
            <NavLink to="/" activeClassName="active" className="hover:text-gray-800 transition-colors" >
              <BiHomeAlt />
            </NavLink>
          </li>
          <li className={`navItem`}>
            <NavLink to="/add" activeClassName="active" className="hover:text-gray-800 transition-colors">
              <AiOutlineFileAdd />
            </NavLink>
          </li>
          <li className={`navItem`}>
            <NavLink to="/list" activeClassName="active" className="hover:text-gray-800 transition-colors">
              <BsCardList />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
