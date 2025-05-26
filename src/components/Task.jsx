import { Link } from "react-router";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Task({
    id,
    done,
    title,
    dueDate,
    priority,
    project,
    setProject,
    data,
    setData,
}) {

    const handleCheck = () => {
        const updatedData = data.map((task) =>
            task.id === id ? { ...task, done: !task.done } : task,
        );
        setProject(project.id, {
            ...project,
	    doneTasks: done ? (project.doneTasks - 1) : (project.doneTasks + 1) 
        });
        setData(updatedData);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        const updatedData = data.filter((task) => task.id !== id);
        setProject(project.id, {
            ...project,
            totalTasks: project.totalTasks - 1,
	    doneTasks: done ? (project.doneTasks - 1) : (project.doneTasks) 
        });
        setData(updatedData);
    };

    return (
        <div
            key={id}
            className="border- flex h-10 cursor-pointer items-center justify-start border-b-1 border-gray-400/40 hover:bg-gray-500/20"
        >
            <div className="flex h-[100%] w-10 items-center justify-center">
                <input type="checkbox" checked={done} onChange={handleCheck} />
            </div>
            <div className="flex h-[100%] w-90 items-center px-4 font-bold">
                {title}
            </div>
            <div className="flex h-[100%] w-24 items-center justify-center text-gray-600">
                {dueDate}
            </div>
            <div
                className={`flex h-[100%] w-20 items-center justify-center ${priority === "High" ? "text-red-500" : priority === "Medium" ? "text-orange-400" : "text-green-500"}`}
            >
                {priority}
            </div>
            <div className="flex h-[100%] w-48 items-center justify-end px-2 text-gray-700/80">
                <Link to={"/"}>
                    <FontAwesomeIcon className="mx-2" icon={faEye} />
                </Link>
                <Link to={"/edit-task/" + id}>
                    <FontAwesomeIcon className="mx-2" icon={faPen} />
                </Link>
                <p onClick={handleDelete}>
                    <FontAwesomeIcon className="mx-2" icon={faTrash} />
                </p>
            </div>
        </div>
    );
}

export default Task;
