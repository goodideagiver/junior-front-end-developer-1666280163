import { TaskList } from './components/TaskList/TaskList'
import { taskStatuses } from './components/TaskList/taskStatuses'
import './App.css'

const DUMMY_TASKS = [
  {
    status: taskStatuses.green,
    title: 'Task 1',
    id: 'dasdasd23f',
    businessContexts: ['businessContext1', 'businessContext2'],
  },
  {
    status: taskStatuses.blue,
    title: 'Task 2',
    id: 'd32q2d',
    businessContexts: ['businessContext1', 'businessContext2'],
  },
  {
    status: taskStatuses.gray,
    title: 'Task 3',
    id: 'sdfh789',
    businessContexts: ['businessContext1', 'businessContext2'],
  },
  {
    status: taskStatuses.hidden,
    title: 'Task 4',
    id: 'sdf89',
    businessContexts: ['businessContext1', 'businessContext2'],
  },
]

function App() {
  return <TaskList tasks={DUMMY_TASKS} />
}

export default App
