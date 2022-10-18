// create 기능 생성
import React, { useEffect, useState } from 'react'
import { faCircleXmark} from "@fortawesome/free-regular-svg-icons"; 
import { faTrashCan,faPencil, faAngleUp} from "@fortawesome/free-solid-svg-icons"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import './TodoInsert.css'

// 할일을 팝업에 입력해서 추가하고 수정하고 삭제할 TodoInsert

export default function TodoInsert({
  onInsertToggle, onInsertTodo, 
  selectedTodo, onRemove, onUpdate, onX}) {
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
        {/* x버튼 눌렀을때 다시 기본화면으로  */}
        <div className='xbox' onClick={()=>onX()}>
        <FontAwesomeIcon icon={faCircleXmark} size="2x"/>
        </div>
        <textarea 
         placeholder='Enter new Task'
         value={value} 
         onChange={onChange}>
         </textarea>

         {selectedTodo ? (
          <div className='rewrite'>
     
              <div className='update' 
               onClick={() => 
                {onUpdate(selectedTodo.id, value)}}>
              <FontAwesomeIcon icon={faPencil} size="2x"/>
              </div>
              <div className='delete'
              onClick={()=>
                {onRemove(selectedTodo.id)}}
              >
              <FontAwesomeIcon icon={faTrashCan} size="2x"/>
              </div>

          
          </div>
         ): (

          <button className="newtask" type="submit"
          > 
           New task 
           <FontAwesomeIcon className="angle" icon={faAngleUp} size="lg"/>
           
          </button>
         )}
      
       
    </form>
    </div>
  )
}
