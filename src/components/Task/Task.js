import classes from './Task.module.css'
import { taskStatuses } from '../TaskList/taskStatuses'
import { Blue, Gray, Green } from './StatusIcon/StatusIcon'

const { blue, gray, green } = taskStatuses

export const Task = ({ status, children }) => {
  const StatusIcon = {
    [blue]: <Blue />,
    [gray]: <Gray />,
    [green]: <Green />,
  }

  const statusStyle = {
    [blue]: classes.blue,
    [gray]: classes.gray,
  }

  const listItemStyle = `${classes.root} ${statusStyle[status] || ''}`

  return (
    <li className={listItemStyle}>
      {StatusIcon[status]}
      <span>{children}</span>
    </li>
  )
}
