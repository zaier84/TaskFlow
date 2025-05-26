import {
    faHouse,
    faCircleCheck,
    faFolder,
    faSquarePlus,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import NavElement from "./NavElement.jsx";

function Sidebar() {
    return (
        <div className="flex h-[100vh] w-30 flex-col items-center bg-gray-700 text-white sm:w-58 dark:bg-gray-900">
            <div className="flex h-[20%] w-auto items-center border-b-[1px] border-white text-2xl font-extrabold sm:p-8 sm:text-4xl">
                <h1>TaskFlow</h1>
            </div>
            <div className="flex h-[80%] flex-col items-center gap-60">
                <div>
                    <NavElement icon={faHouse} text={"Dashboard"} to="/" />
                    <NavElement
                        icon={faCircleCheck}
                        text={"All Tasks"}
                        to="/all-tasks"
                    />
                    <NavElement
                        icon={faFolder}
                        text={"Projects"}
                        to="/projects"
                    />
                    <NavElement
                        icon={faSquarePlus}
                        text={"Completed Tasks"}
                        to="/completed-tasks"
                    />
                </div>
                <div>
                    <NavElement
                        icon={faGear}
                        text={"Settings"}
                        to="/settings"
                    />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
