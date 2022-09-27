import { useState } from "react";
import "./CreateTodo.css"

const CreateTodo = (props) => {
    const [value, setValue] = useState('');
    const submit = (event) => {
        event.preventDefault()
        setValue('')
        props.addNewTodo(value)
    }

    const handleChange = (event) => {
        console.log(event);
        setValue(event.target.value);
    };

    return (
        <form onSubmit={submit} className="wrapper">

            <input 
            onChange={handleChange} 
            value={value} 
            itype="text" 
            placeholder="Enter todo" 
            autoFocus/>
            <button>+Create</button>
        </form>
    );
};

export default CreateTodo;