import { Link } from "react-router";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectCard({
    id,
    name,
    totalTasks,
    doneTasks,
    setProjects,
    setShowPopup,
    setMessage,
}) {
    const progress = (doneTasks / totalTasks) * 100;
    const onDelete = (e) => {
        e.preventDefault();
        if (totalTasks > 0) {
            setShowPopup(true);
            setMessage("You cannot delete a project with tasks.");
            return;
        }
        setProjects((prev) => prev.filter((proj) => proj.id !== id));
    };

    return (
        <Link
            to={`/project/${id}`}
            className="m-2 flex h-30 w-60 flex-col items-start rounded-md border border-gray-200 p-4 shadow-md hover:cursor-pointer"
        >
            <div className="flex w-[100%] items-center justify-between">
                <h1 className="font-bold">{name}</h1>
                <FontAwesomeIcon
                    onClick={onDelete}
                    className="mx-2 text-red-500"
                    icon={faTrash}
                />
            </div>
            <div className="mt-4 h-3 w-full rounded-full bg-gray-300">
                <div
                    className="h-3 rounded-full bg-blue-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p>
                {doneTasks} of {totalTasks} completed
            </p>
        </Link>
    );
}

export default ProjectCard;
