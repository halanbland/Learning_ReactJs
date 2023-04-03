import { text } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './GroceryBud.css'


const data = []

function GroceryBud() {
    const [todoList, setTodoList] = useState(data)
    const [input, setInput] = useState('')
    const [inputCheck, setInputCheck] = useState([])

    // toast messsage
    const notify = () => toast.success("Wow so easy!", {
        position: toast.POSITION.TOP_CENTER
      });
    const notifyError = () => toast.error("Your input emtry!", {
        position: toast.POSITION.TOP_CENTER
      });

    const handleAdds = () => {
        if (input === '') {
            notifyError()
        } else {
            setTodoList(prev => [...prev, input])
            setInput('')
            notify()
        }
    }

    const handleDelete = (e) => {
        
        let newTodo = todoList
        newTodo.splice(e.target.id, 1)
        setTodoList([...newTodo])
    }

    const handleCheck = (e) => {
        setInputCheck(prev => {
            let value = parseInt(e.target.value)
            if(prev.includes(value)) {
                return prev.filter(item => item !== value)
            } else {
                return [...prev, value]
            }
        })
    }

    return ( 
        <div className="grocery">
            <div className='grocery-container'>
                <h1 className='grocery__heading'>Grocery Bud</h1>
                <div className='grocery__form'>
                    <input onChange={(e) => setInput(e.target.value)} value={input} className='grocery__input-text' type='text' />
                    <button onClick={handleAdds} className='btn--grocery__add'>Add item</button>
                    <ToastContainer />
                </div>
                <ul className='grocery__list'>
                    {
                        todoList.map((item, index) => {
                            return (
                                <li key={index} className='grocery__list-item'>
                                    <div>
                                        <input checked = {inputCheck.includes(index)} value={parseInt(index)} onChange={handleCheck} type='checkbox' />
                                        <span style={inputCheck.includes(index)? {textDecoration: 'line-through'} : {}} className='grocery__list-item-content'>{item}</span>
                                    </div>
                                    <div>
                                        <button onClick={(e)=> {
                                            handleDelete(e);
                                            notify()
                                        }} id={index} className='btn--grocery__delete'>Delete</button>
                                        <ToastContainer />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
     );
}

export default GroceryBud;