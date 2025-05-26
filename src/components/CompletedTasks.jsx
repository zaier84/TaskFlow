import TaskList from "./TaskList";

function CompletedTasks() {
    const filterFunction = (task) => task.done;

    return <TaskList margin_top="20" filterFunction={filterFunction} />;
}

export default CompletedTasks;
