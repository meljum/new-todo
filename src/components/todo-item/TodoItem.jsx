import { useState } from "react";
import css from "./TodoItem.module.css"

const TodoItem = ({ HandleEdit, handleStatus, id, text, status, handleDelet, addNewTodo }) => {

    const onDelete = () => {
        handleDelet(id)
    }

    const [isInputShow, setInputShow] = useState(false)
    const [inpValue, setinpValue] = useState(text)

    const onEdit = () => {
        setInputShow(!isInputShow)
    }

    const submit = (event) => {
        event.preventDefault()
         HandleEdit(id,inpValue)
         setInputShow(false)
    }

    const handleInpChange = (event) => {
        setinpValue(event.target.value);
    };
    
    return (
        <div className={css.wrapper}>
            {isInputShow ? (
                <form onSubmit={submit}>
                    <input onChange={handleInpChange} 
                    value={inpValue} 
                    type="text"
                     placeholder="Todo" 
                     autoFocus/>
                    <button>Save</button>
                </form>
            ) : (
                <label >
                    <input type="checkbox" onChange={() => handleStatus(id)} checked={status} />
                    <span className={status === true ? css.text : ""}>
                        {text}
                        {status}
                    </span>
                </label>)}

            <div>
                <button className={css.Edit} onClick={onEdit}>Edit</button>
                <button onClick={onDelete} className={css.Del}>Del</button>
            </div>
        </div>
    )
}
export default TodoItem;