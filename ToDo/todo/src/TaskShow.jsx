import Task from "./task";

function TaskShow({ tasks, deleted }) {
    console.log(tasks)
    return (
        <>
            <div className="taskShow">
                <h2>Görevler</h2>

                <div className="taskCard">
                    {
                        tasks.map((task) => {
                            return <Task key={task.id} task={task} deleted={deleted} />

                        })
                    }
                </div>

            </div>

        </>
    );
}

export default TaskShow;