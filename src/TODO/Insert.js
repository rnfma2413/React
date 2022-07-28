import React, { useState } from 'react'

const Insert = ({ setTodoTxt, todoTxt, setInfoData }) => {
  const updateInput = (value) => {
    setTodoTxt(value)
  }

  return (
    <> 
      <input type="text" 
        placeholder="데이터를 입력 해주세요."
        value={todoTxt}
        onChange={e => updateInput(e.target.value)} >          
      </input>
      <button className='test' type='button' onClick={setInfoData}>입력</button>
    </>
  )
}

export default Insert