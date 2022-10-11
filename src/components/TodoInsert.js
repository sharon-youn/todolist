// create 기능 생성
import React, { useState } from 'react'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import './TodoInsert.css'
export default function TodoInsert({onInsertToggle, onInsertTodo}) {
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

  return (
    <div>
    <div className='background' onClick = {onInsertToggle}></div>
    <form onSubmit={onSubmit}> 
        <input 
         placeholder='please type'
         value={value} 
         onChange={onChange}>

         </input>
        <button type="submit">
        <FontAwesomeIcon icon={faCirclePlus} />
        </button>
    </form>
    </div>
  )
}
