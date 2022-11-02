//const Tasks = () => {
  //Here, We have used the data as a part of our component but we cannot change the data (it is immutable)
  //To do that we will have to pass it in the main Component
  //But We will use a better approach and declare it into App.js file
  //const [tasks, setTasks] = useState([
    //{
      //id: 1,
      //text: 'Doctor\'s Appointment',
      //day: 'Feb 5th at 12:30 PM',
      //reminder: true,
    //},
    //{
      //id: 2,
      //text: 'Meeting on Zoom',
      //day: 'Feb 6th at 2:30 PM',
      //reminder: true,
    //},
    //{
      //id: 3,
      //text: 'Shopping',
      //day: 'Feb 6th at 6:00 PM',
      //reminder: false,
    //}
  //])

  //setTasks is used to change any part of the state

  //return (
    //we cannot do tasks.push() instead we will use setTasks
    //such as to add a new data in the existing data, we can use
    //setTasks([...tasks, {}])
    //<>
      //{tasks.map((task) => (
        //<h3 key={task.id}>{task.text}</h3>
      //))}
    //</>
  //)
//}

//-------------------------------------------------------------------//

//Better Approach
import Task from './Task'
//Pass the data as a prop in the components
const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}
export default Tasks
