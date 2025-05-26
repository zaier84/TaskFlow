import { useState } from "react";
import { createPortal } from "react-dom";

function NewProjectModal({ isOpen, setIsOpen, setProjects }) {
    const [projectName, setProjectName] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!projectName) return;
        setProjects((prev) => [
            ...prev,
            {
                name: projectName,
                id: crypto.randomUUID(),
                totalTasks: 0,
                doneTasks: 0,
            },
        ]);
        setProjectName("");
        setIsOpen(false);
    };

    return createPortal(
        <div
            className={`${isOpen ? "" : "hidden"} fixed inset-0 flex items-center justify-center bg-gray-500/50`}
        >
            <div className="h-12 max-w-64 grow rounded-lg bg-white">
                <form>
                    <input
                        type="text"
                        className="h-12 w-64 rounded-lg border-2 border-gray-300 p-2"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="Project Title"
                    />
                    <button
                        className="mt-2 mr-1 w-[48%] cursor-pointer rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                        onClick={onSubmit}
                    >
                        Submit
                    </button>
                    <button
                        className="mt-2 ml-1 w-[48%] cursor-pointer rounded-lg bg-white p-2 text-black hover:bg-gray-300"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                        }}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>,
        document.getElementById("modal-root"),
    );
}

export default NewProjectModal;
