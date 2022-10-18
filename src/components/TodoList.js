import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

// 할일의 목록을 담고 있는 TodoList

// app.js에서 처음 화면에 보여줄 
// 기본 할일 객체가 담긴 배열인 todos를 불러오기
// todos를 map함수로 렌더링하고 그 안에 TodoItem을 부르기!

const TodoList = ({todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => {
    return (
        <div className='TodoList'>
            {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} 
            onCheckToggle={onCheckToggle}
            onInsertToggle={onInsertToggle} 
            onChangeSelectedTodo={onChangeSelectedTodo}/>
            ))}
            
            </div>
    )
}

export default TodoList;
