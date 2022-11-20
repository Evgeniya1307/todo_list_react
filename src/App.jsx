import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { db } from "./firebase"; 


function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
 //получаю данные 
 useEffect(()=>{
  const q= query(collection(db,"tasks"));
  const unsub= onSnapshot(q,(querySnapshot)=>{ //запрос
    let tasksArray=[];//временный массив для задач
    querySnapshot.forEach((doc)=>{
      tasksArray.push({...doc.data(), id:doc.id});//каждое действие помещаю во временный массив
    })
    setTasks(tasksArray)
  }) 
  return()=> unsub()
  },[]);




  const deleteTask = (id) => {
    const chooseTask = tasks.filter((task) => task.id !== id);
    setTasks(chooseTask);
  };
  return (
    <>
      <Header />
      <div className="flex justify-around">
        <Form task={task} tasks={tasks} setTasks={setTasks} setTask={setTask} />
        <List deleteTask={deleteTask} tasks={tasks} setTask={setTask} />
      </div>
    </>
  );
}

export default App;
