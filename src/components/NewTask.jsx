import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import NewProjectModal from "./NewProjectModal";
import Select from "./Select";
import Input from "./Input";

function NewTask() {
    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "",
        project: "",
    });
    const [data, setData] = useLocalStorage("tasks");
    const [projects, setProjects] = useLocalStorage("projects");
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !task.title ||
            !task.description ||
            !task.dueDate ||
            !task.priority ||
            !task.project
        )
            return;

        setData([...data, { ...task, done: false, id: crypto.randomUUID() }]);
        setProjects((prev) => {
            return prev.map((p) => {
                if (task.project === p.name) {
                    return { ...p, totalTasks: p.totalTasks + 1 };
                }
                return p;
            });
        });

        setTask({
            title: "",
            description: "",
            dueDate: "",
            priority: "",
            project: "",
        });
    };

    return (
        <div className="flex h-[79.5%] w-full items-center justify-center">
            <form className="flex w-[60%] flex-col gap-4">
                <Input
                    type="text"
                    value={task.title}
                    onChange={(e) =>
                        setTask({ ...task, title: e.target.value })
                    }
                    placeholder="Task Title"
                />
                <textarea
                    className="rounded-lg border-2 border-gray-300 p-2"
                    value={task.description}
                    onChange={(e) =>
                        setTask({ ...task, description: e.target.value })
                    }
                    placeholder="Task Description"
                ></textarea>
                <Input
                    type="date"
                    value={task.dueDate}
                    onChange={(e) =>
                        setTask({ ...task, dueDate: e.target.value })
                    }
                />
                <Select
                    value={task.priority}
                    onChange={(e) =>
                        setTask({ ...task, priority: e.target.value })
                    }
                >
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </Select>
                <Select
                    value={task.project}
                    onChange={(e) => {
                        if (e.target.value === "new_project") {
                            e.preventDefault();
                            setIsOpen(true);
                        } else {
                            setTask({ ...task, project: e.target.value });
                        }
                    }}
                >
                    <option value="" hidden>
                        Select Project
                    </option>
                    <option value="new_project">Create New Project</option>
                    {projects.map((project) => {
                        return (
                            <option key={project.id} value={project.name}>
                                {project.name}
                            </option>
                        );
                    })}
                </Select>
                <button
                    className="cursor-pointer rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                    onClick={handleSubmit}
                >
                    Create Task
                </button>
            </form>
            <NewProjectModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setProjects={setProjects}
            />
        </div>
    );
}

export default NewTask;
