import { useNavigate, useParams } from "react-router";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import NewProjectModal from "./NewProjectModal";
import Input from "./Input";
import Select from "./Select";

function EditTask() {
    const { taskId } = useParams();
    const [data, setData] = useLocalStorage("tasks");
    const [projects, setProjects] = useLocalStorage("projects");
    const [isOpen, setIsOpen] = useState(false);
    const [task, setTask] = useState(null);
    const [initialData, setInitialData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const found = data.find((taskEl) => taskEl.id === taskId);
        if (found) {
            setTask(found);
            setInitialData(found);
        }
    }, [data, taskId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTask = data.map((taskEl) =>
            taskEl.id === taskId ? task : taskEl,
        );
        setProjects((prev) => {
            return prev.map((p) => {
                if (p.name === task.project) {
                    return {
                        ...p,
                        totalTasks: p.totalTasks + 1,
                        doneTasks: task.done ? p.doneTasks + 1 : p.doneTasks,
                    };
                } else if (p.name === initialData.project) {
		    return {
                        ...p,
                        totalTasks: p.totalTasks - 1,
                        doneTasks: task.done ? p.doneTasks - 1 : p.doneTasks,
                    };
		}
		return p;
            });
        });
        setData(updatedTask);
        navigate(-1);
    };

    if (!task) return <div>Loading...</div>;

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
                    Update Task
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

export default EditTask;
