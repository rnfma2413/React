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
        if(todoTxt == ""){
            alert("데이터가 비었음")
        }else{
            const _list = [...list]
            _list.push(todoTxt)
            dispatch(todoAction.setTodo(_list))
        }
    }

    const deleteFn = (index) =>{
        const _list = [...list]
        _list.splice(index , 1)
        dispatch(todoAction.setTodo(_list))
    }

    const deleteAllFn = () =>{
        const _list = [...list]
        _list.splice("undefined")
        dispatch(todoAction.setTodo(_list))
    }

    return (
        <>    
            <h1><img src='logo192.png' style={{width:50}}></img><span style={{position:"absolute"}}>React</span></h1>     
            <Insert setTodoTxt={setTodoTxt} todoTxt={todoTxt} setInfoData={setInfoData} deleteAllFn={deleteAllFn}/>                        
            <Item list={list}  deleteFn={deleteFn}/>
        </>
    )
}

export default Index