import React from 'react'
import { faCircle } from "@fortawesome/free-regular-svg-icons"; 
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import './TodoItem.css'


// 체크박스, 동그라미 , 할일들의 목록의 하나하나를 담고 있는 TodoItem

export default function TodoItem({todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) {
  // todo가 객체형태이니까 객체구조분해로 
  // todo의 id, text, checked를 따로 쓸 수 있도록 선언
    const {id, text, checked} = todo;
    
  return (
    <div className='TodoItem'>
        {/* 체크상태에 따라서 css 적용을 다르게 할 예정  */}
     <div className={`content ${checked? 'checked' : ''}`}>
      {/* 체크박스 누를때 해체 생성 하는 방법  */}
        {checked ? 
        <FontAwesomeIcon icon={faCircleCheck}
        className='circle'
        onClick={
          () => {onCheckToggle(id)}
        }
        /> 
        : 
        <FontAwesomeIcon icon={faCircle}
        className='checkbox'
        onClick={
          () => {onCheckToggle(id)}
        }/>}
        <div className='text' onClick={()=>{
          onChangeSelectedTodo(todo)
          onInsertToggle()
        }}>{text}</div>
        </div>
    </div>
  )
}
