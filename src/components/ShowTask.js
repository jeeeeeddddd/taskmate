export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {

  const handleEdit = (id) => {
    const selectedTask = tasklist.find(todo => todo.id === id)
    setTask(selectedTask);
  }

  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter(todo => todo.id !== id);
    setTasklist(updatedTaskList);
  }


  return (
    <section className="showTask">
      <p className="head">
        <span className="title">To do</span>
        <span className="count">{tasklist.length}</span>
        <button onClick={() => setTasklist([])} className="clearAll">Clear All</button>
      </p>
      <ul>
        { tasklist.map((task) => (
          <li key={task.id}>
          <p>
            <span className="name">{task.name}</span>
            <span className="time">{task.time}</span>
          </p>
          <i onClick={() => handleEdit(task.id)} className="bi bi-pencil square"></i>
          <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
        </li>
        )) }
      </ul>
    </section>
  )
}
