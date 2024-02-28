import { useState } from 'react'


import './App.css'
import Header from './header';
import CreateTask from './CreateTask';
import TaskShow from './TaskShow';

function App() {
  const [tasks, setTasks] = useState([])
  function deletedİd(id){
   const filterArray= tasks.filter((task)=>{
        return task.id!==id;
    })
    setTasks(filterArray)
  }
  function addTask(title,desc){
    const createdTasks=[
      ...tasks,{
        id:Math.round(Math.random()*99999),
        title,
        desc,
      }
    
    ]
    setTasks(createdTasks);
    
  }
  return (
    <>
    
    <Header></Header>
    <CreateTask onAdd={addTask}>
     
    </CreateTask>
    <TaskShow tasks={tasks} deleted={deletedİd}/>

    </>
  )
}

export default App
