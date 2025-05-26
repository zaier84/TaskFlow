import TaskList from "./TaskList";

function Dashboard() {
    const today = new Date().toISOString().split("T")[0];
    const filterFunction = (task) => {
        return task.dueDate === today;
    };

    return (
        <>
            <div className="flex h-20 items-center pl-10 text-3xl font-extrabold">
                <h1 className="">Today</h1>
            </div>
            <TaskList filterFunction={filterFunction} />
        </>
    );
}

export default Dashboard;
