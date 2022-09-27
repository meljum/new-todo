
import './App.css';
import Header from "./components/header/Header"
import CreateTodo from "./components/create-todo/CreateTodo"
import TodoItem from './components/todo-item/TodoItem';
import { useEffect, useState } from 'react';


function App()  {
const [arr, setArr] = useState(JSON.parse(localStorage.getItem("todo"))||[])

useEffect(() => {
  console.log("gragr");
},[])

useEffect(() => {
  console.log("fzdhtdj");
  localStorage.setItem("todo", JSON.stringify(arr))
},[arr])
  
  const result = arr.reduce((acc, item) => {
    return acc + Number(item.status);
  }, 0);
  const handleAddTodo = (newText) => {
    setArr([...arr, { text: newText, status: false, id: Date.now() }])
  }
const handleDeletTodo = (id) => {
  // alert("Delete from App" + id)
  setArr(arr.filter((item) => item.id !== id))
  // console.log(arr);
  }
  const handleStatus = (id) => {
    // alert("status" + id);
    const todoLists = arr.map((item) => {
      if(item.id === id) {
        return {...item, status: !item.status}
      }
      return item
    })
    setArr(todoLists)
  };  
 const HandleEdit = (id, newText) => {
  const todoLists = arr.map((item) => {
    if(item.id === id) {
      return {...item, text:newText }
    }
    return item
  })
  setArr(todoLists)
 }

const todoLists = arr.map((item) => {
    return <TodoItem 
    key={item.id}
    arr={arr}
    addNewTodo={handleAddTodo}
    handleStatus={handleStatus} 
    handleDelet={handleDeletTodo} 
    setArr={setArr}
    HandleEdit={HandleEdit} 
    {...item} />
  })

  return (
    <div className="App">
      
      <Header length={arr.length} result={result} />

      <div className='content'>
        <CreateTodo  addNewTodo={handleAddTodo} />
        <div className='todos-wrapper'>
           {
      todoLists.length
      ? todoLists
      : <h1 className='watermark'>Please add some Todo element </h1 >
           }
           </div>

      </div>
    </div>
  )
};

export default App;
