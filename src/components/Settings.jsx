import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import ConfirmationMessage from "./ConfirmationMessage";
import useLocalStorage from "../hooks/useLocalStorage";

function Settings() {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [message, setMessage] = useState("");
    const [handleConfirm, setHandleConfirm] = useState(() => {});

    const [tasks, setTasks] = useLocalStorage("tasks");
    const [projects, setProjects] = useLocalStorage("projects");
    const onClearTasksClick = () => {
        setMessage("Are you sure you want to delete all Tasks?");
        setShowConfirmation(true);
        setHandleConfirm(() => () => {
            setTasks([]);
            setProjects((prev) =>
                prev.map((proj) => ({ ...proj, doneTasks: 0, totalTasks: 0 })),
            );
        });
    };
    const onClearProjectsClick = () => {
        setMessage("Are you sure you want to delete all Projects?");
        setShowConfirmation(true);
        setHandleConfirm(() => () => {});
    };
    const onClearLocalStorageClick = () => {
        setMessage("Are you sure you want to delete all data?");
        setShowConfirmation(true);
        setHandleConfirm(() => () => {
            setTasks([]);
            setProjects([]);
        });
    };

    return (
        <>
            <div
                className={`mx-34 mt-20 flex max-h-80 min-w-[30%] flex-col gap-4 overflow-hidden overflow-y-auto rounded-lg border-1 border-gray-400/40 p-4 dark:bg-gray-900 `}
            >
                <ToggleSwitch
                    label="Dark Mode"
                    isOn={darkMode}
                    handleToggle={() => setDarkMode(!darkMode)}
                />
                <ToggleSwitch
                    label="Enable Notifications"
                    isOn={notifications}
                    handleToggle={() => setNotifications(!notifications)}
                />
                <div className="flex flex-col items-center justify-center gap-2">
                    <button
                        className="h-8 w-50 rounded-lg border-1 border-red-600 bg-red-600/20 dark:bg-red-600/40 font-bold text-red-600 dark:text-red-500 hover:cursor-pointer"
                        onClick={onClearTasksClick}
                    >
                        Clear Tasks
                    </button>
                    <button
                        className="h-8 w-50 rounded-lg border-1 border-red-600 bg-red-600/20 dark:bg-red-600/40 font-bold text-red-600 dark:text-red-500 hover:cursor-pointer"
                        onClick={onClearLocalStorageClick}
                    >
                        Clear Local Storage
                    </button>
                </div>
            </div>
            <ConfirmationMessage
                showMessage={showConfirmation}
                setShowMessage={setShowConfirmation}
                message={message}
                handleConfirm={handleConfirm}
            />
        </>
    );
}

export default Settings;
