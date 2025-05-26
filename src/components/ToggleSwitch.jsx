function ToggleSwitch({ label, isOn, handleToggle }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-gray-800 dark:text-white">{label}</span>
            <div
                className={`flex h-6 w-12 cursor-pointer items-center rounded-full p-1 transition duration-300 ${isOn ? "bg-blue-500 dark:bg-blue-900" : "bg-gray-300 dark:bg-gray-700"}`}
                onClick={handleToggle}
            >
                <div
                    className={`h-4 w-4 transform rounded-full bg-white dark:bg-gray-300 shadow-md transition-transform duration-300 ${isOn ? "translate-x-6" : ""}`}
                ></div>
            </div>
        </div>
    );
}

export default ToggleSwitch;
