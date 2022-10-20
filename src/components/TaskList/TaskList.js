import { Task } from '../Task/Task'
import classes from './TaskList.module.css'
import { taskStatuses } from './taskStatuses'

import { FiChevronDown } from 'react-icons/fi'

export const TaskList = ({ tasks }) => {
  const TasksToDisplay = tasks.map((task, index) => {
    if (task.status === taskStatuses.hidden) return null

    return (
      <Task status={task.status} key={index + task.title}>
        {task.title}
      </Task>
    )
  })

  return (
    <div className={`main-card ${classes.root}`}>
      <header className={classes.header}>
        <h2 className={classes.title}>YOUR TASKS</h2>
        <button className={classes.button}>
          <span>
            <FiChevronDown />
          </span>
        </button>
      </header>
      <ul className={classes.list}>{TasksToDisplay}</ul>
    </div>
  )
}
