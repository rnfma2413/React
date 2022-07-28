import React from 'react'

const Item = ({list,  deleteFn, deleteAllFn}) => {
  return (
    <>
      {list && list.map((item, i) => {
        return (          
          <div key={i} style={{marginBottom: 10}}>
            <span style={{fontSize:"medium", marginRight:10, width: 50, height: 35}}>{item}</span>
            <button className='test' type="button" onClick={() => deleteFn(i)}>삭제</button>            
          </div> 
        )
       
      })}
    </>
  )
}

export default Item