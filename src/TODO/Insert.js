import React, { useState } from 'react'

const Insert = ({ setTodoTxt, todoTxt, setInfoData, deleteAllFn }) => {
  const updateInput = (value) => {
    setTodoTxt(value)
  }

  return (
    <> 
    <div>

      <input type="text" 
          placeholder="데이터를 입력 해주세요."
          value={todoTxt}
          onChange={e => updateInput(e.target.value)} 
          style={{height:30 ,width: 400, marginRight: 20, fontSize: "medium", marginBottom: 20}}>          
      </input>
      <button className='test' type='button' onClick={setInfoData}><span>입력</span></button>
      <button className='test' type="button" onClick={() => deleteAllFn()}>전체삭제</button>
    </div>

    </>
  )
}

export default Insert