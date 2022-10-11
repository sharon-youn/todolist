import React from 'react'
import {GrCheckboxSelected,GrCheckbox} from 'react-icons/gr'
import './TodoItem.css'

export default function TodoItem({todo, onCheckToggle}) {
    const {id, text, checked} = todo;
  return (
    <div className='TodoItem'>
        {/* 체크상태에 따라서 css 적용을 다르게 할 예정  */}
     <div className={`content ${checked? 'checked' : ''}`}>
      {/* 체크박스 누를때 해체 생성 하는 방법  */}
        {checked ? 
        <GrCheckboxSelected 
        onClick={
          () => {onCheckToggle(id)}
        }
        /> : <GrCheckbox
        onClick={
          () => {onCheckToggle(id)}
        }/>}
        <div className='text'>{text}</div>
        </div>
    </div>
  )
}
