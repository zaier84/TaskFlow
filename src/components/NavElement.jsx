import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

function NavElement({ icon, text, to }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${isActive ? "bg-gray-500/60" : ""} mt-2 flex h-8 w-14 sm:w-58 flex-col sm:flex-row items-center cursor-pointer items-center rounded-lg sm:pl-4 hover:bg-gray-500/60`
            }
        >
            <div>
                <FontAwesomeIcon className="mt-2" icon={icon} />
            </div>
            <div className="pl-4 text-lg hidden sm:block font-bold">{text}</div>
        </NavLink>
    );
}

export default NavElement;
