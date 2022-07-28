import React from 'react'

const Item = ({list,  deleteFn}) => {
  return (
    <>
      {list && list.map((item, i) => {
        return (          
          <div key={i}>
            {item}
            <button type="button" onClick={() => deleteFn(i)}>삭제</button>
          </div> 
        )
       
      })}
    </>
  )
}

export default Item