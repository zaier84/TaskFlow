import ProjectCard from "./ProjectCard.jsx";
import useLocalStorage from "../hooks/useLocalStorage";
import MessagePopup from "./MessagePopup.jsx";
import { useState } from "react";

function ProjectList() {
    const [projects, setProjects] = useLocalStorage("projects");
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <div className="mx-30 flex h-auto w-auto flex-wrap items-center justify-center gap-3">
            {projects.map((proj) => (
                <ProjectCard
                    key={proj.id}
                    id={proj.id}
                    name={proj.name}
                    totalTasks={proj.totalTasks}
                    doneTasks={proj.doneTasks}
                    setProjects={setProjects}
                    setShowPopup={setShowPopup}
                    setMessage={setMessage}
                />
            ))}
            <MessagePopup
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                message={message}
            />
        </div>
    );
}

export default ProjectList;
