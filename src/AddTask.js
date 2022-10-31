import React, {useState}  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from 'react-redux';
import {add} from './Redux/Todo';


const AddTask = () => {

    const todo = useSelector((state)=>state.todos)
    const Dispatch =useDispatch() ;

    //ici tt d'abord nous devons recuperer les states de la barra de recherche
    const [input, setInput]=useState("")
   
    const handelAdd=()=>{
        Dispatch(add(input))
    }

  return (
          
            <div className="d-flex justify-content-center p-2 mb-3" style={{ gap: "1em" }}>
            <input placeholder="Enter your task here"  onChange={(e)=>setInput(e.target.value)} ></input>
            <button  variant="success"  onClick={handelAdd()} >Add Task</button>
        </div >
        )
}

export default AddTask