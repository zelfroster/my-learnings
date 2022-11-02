//import React from 'react'
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  //const title = 'Sumit'
  //const x = true
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor\'s Appointment',
      day: 'Feb 5th at 12:30 PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting on Zoom',
      day: 'Feb 6th at 2:30 PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Shopping',
      day: 'Feb 6th at 6:00 PM',
      reminder: false,
    }
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    )
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {
        tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          'There are No Tasks to Show'
        )
      }
    </div>
  );
}

//Class based approach
/*
class App extends React.Component {
  render() {
    return <h1> hello </h1>
  }
}
*/

export default App;
