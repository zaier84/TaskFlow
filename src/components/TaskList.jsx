import React from "react";
import Task from "./Task";
import useLocalStorage from "../hooks/useLocalStorage";

function TaskList({ margin_top, filterFunction }) {
    const [data, setData] = useLocalStorage("tasks");
    const filteredData = filterFunction ? data.filter(filterFunction) : data;
    const [projects, setProjects] = useLocalStorage("projects");
    const setProject = (id, data) => {
        setProjects(
            projects.map((project) => (project.id === id ? data : project)),
        );
    };

    return (
        <div
            className={`mx-34 mt-${margin_top || 0} max-h-80 max-w-[768px] overflow-hidden overflow-y-auto rounded-lg border-1 border-gray-400/40`}
        >
            {filteredData.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    done={task.done}
                    title={task.title}
                    dueDate={task.dueDate}
                    priority={task.priority}
                    project={projects.find(
                        (proj) => task.project === proj.name,
                    )}
                    setProject={setProject}
                    data={data}
                    setData={setData}
                />
            ))}
        </div>
    );
}

export default TaskList;
