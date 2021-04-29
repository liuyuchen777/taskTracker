/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-27 23:35:08
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-29 02:01:00
 * @Description:
 * @FilePath: /taskTracker/src/App.js
 * @GitHub: https://github.com/liuyuchen777
 */

import { React, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'
import Footer from './Footer'
import About from './About'

function App() {
  const [showAddTask, setShowAddTask] = useState(
    false
  )

  // const name = 'Brad'
  // const x = true
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }

    getTasks()
  }, [])

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5500/tasks`)
    const data = await res.json()

    // console.log(data)

    return data
  }

  // fetch task (single)
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5500/tasks/${id}`)
    const data = await res.json()

    // console.log(data)

    return data
  }

  // delete task
  const deleteTask = async (id) => {
    // console.log("delete", id)
    await fetch(`http://localhost:5500/tasks/${id}`, {
      method: 'DELETE',
    })
    
    setTasks(tasks.filter((task) => task.id !== id))
  } 
  
  // toggleReminder
  const toggleReminder = async (id) => {
    let updTask = await fetchTask(id)
    updTask.reminder = !updTask.reminder

    const res = await fetch(`http://localhost:5500/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  // add task
  const addTask = async (task) => {
    // console.log(task)

    const res = await fetch('http://localhost:5500/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  return (
    // single element
    <Router>
    <div className="container">
      <Header onAdd={() => 
        setShowAddTask(!showAddTask)} showAdd={showAddTask}
      />
      <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? 
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 
            <p>no tasks to show</p>
            }
          </>
        )} />
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>
    // <h2></h2>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
