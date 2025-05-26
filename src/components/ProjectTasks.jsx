import { useParams } from "react-router";
import useLocalStorage from "../hooks/useLocalStorage";
import TaskList from "./TaskList";

function ProjectTasks() {
    const {projectId} = useParams();
    const [projects, setProjects] = useLocalStorage("projects");
    const project = projects.find(proj => proj.id === projectId);

    const filterFunction = task => task.project === project.name;

    return (
        <>
            <div className="flex h-20 items-center pl-10 text-3xl font-extrabold">
                <h1 className="">{project?.name}</h1>
            </div>
            <TaskList filterFunction={filterFunction} />
        </>
    );
}

export default ProjectTasks;
