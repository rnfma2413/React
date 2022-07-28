import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Insert from './Insert'
import Item from './Item'
import { todoAction } from './Reducer'


const Index = () => {
    const [todoTxt, setTodoTxt] = useState('')

	const dispatch = useDispatch();
    const list = useSelector((store) => store.todo.todos);

    const setInfoData = () => {
        const _list = [...list]
        _list.push(todoTxt)
        dispatch(todoAction.setTodo(_list))
    }

    const deleteFn = (index) =>{
        const _list = [...list]
        _list.splice(index , 1)
        dispatch(todoAction.setTodo(_list))
    }

    return (
        <>       
            <h1>React TODOLIST</h1>     
            <Insert setTodoTxt={setTodoTxt} todoTxt={todoTxt} setInfoData={setInfoData}/>                        
            <Item list={list}  deleteFn={deleteFn}/>
        </>
    )
}

export default Index