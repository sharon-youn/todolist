// create 기능 생성
import React, { useEffect, useState } from 'react'
import { faCirclePlus, faTrashCan, faPencil} from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import './TodoInsert.css'
export default function TodoInsert({
  onInsertToggle, onInsertTodo, 
  selectedTodo, onRemove, onUpdate}) {
    // 빈문자열 초기값으로 두기 -> input에 할일 적으면 생성되는 상태
    const [value, setValue] = useState("")

    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onSubmit = (e)  => {
    // submit 새로고침을 막아준다. 
        e.preventDefault();
        // 받아온 함수의 value를 받아오고
        onInsertTodo(value);
        //value값을 다시 빈문자열로
        setValue("");
        // toggle을 다시 닫는다 
        onInsertToggle();
    }


  useEffect(()=> {
    if(selectedTodo) {
      // selectedTodo에 있는 textf를 보여줌
      setValue(selectedTodo.text)

    }
  }, [selectedTodo])

  return (
    <div>
    <div className='background' onClick = {onInsertToggle}></div>
    <form onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.id, value)} :onSubmit}> 
        <input 
         placeholder='please type'
         value={value} 
         onChange={onChange}>

         </input>
         {selectedTodo ? (
          <div className='rewrite'>
            <button
            className='update'
             onClick={() => {{onUpdate(selectedTodo.id, value)}}}
            >수정</button>
            {/* <FontAwesomeIcon icon={faPencil} 
            onClick={() => {{onUpdate(selectedTodo.id, value)}}}/> */}
            <button className='delete'
            onClick={()=>{onRemove(selectedTodo.id)}}
            >삭제</button>
            {/* <FontAwesomeIcon icon={faTrashCan} onClick={()=>{onRemove(selectedTodo.id)}} /> */}
          </div>
         ): (
          <button type="submit"> 
        <FontAwesomeIcon icon={faCirclePlus}  />
          </button>
         )}
      
       
    </form>
    </div>
  )
}
