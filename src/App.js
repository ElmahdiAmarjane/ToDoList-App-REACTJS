
import './App.css';
import React , { useState } from 'react';


function App() {
   let [tasks,setTasks]=useState([]);
   let [task,setaTask]=useState("");
   let [updateState,setUpdateState]=useState(false);
   let [indexTaskToUpdate,setIndexTask,]=useState();
   const addTask = ()=>{
     
     if(!updateState) {
      setTasks([...tasks,task]);
   }
   else{
      const updateTask=[...tasks];
      updateTask[indexTaskToUpdate]=task;
      setTasks(updateTask);
     
   }
   setaTask("");
   }
    
   const deleteTask = (key)=>{
       const updateTasks = tasks.filter((task,index)=>index!==key);
       setTasks(updateTasks);
   }
   const handleTask = (tas,index)=>{
     setUpdateState(true);
     setIndexTask(index);
      setaTask(tas);
  }
  return (
    <div className="App">
      <div className='All'>
       <h1> Get Things Done! </h1>
       <input value={task} onChange={(e)=>setaTask(e.target.value)}  className="input-task" placeholder='What is the task today ?'></input>
       <button  onClick={()=>addTask()}>Add</button>
       <div>
        { tasks.map( (tas,key) =>(
           <div className='task'>
           <p> {tas} </p>
             <img onClick={()=>deleteTask(key)} src="croix.png" alt=""/>
             <img onClick={()=>handleTask(tas,key)} src="update.png" alt=""/>
           </div>
           
        ))
          
        }
          
       </div>
       </div>
    </div>
  );
}

export default App;
