import './App.css';
import Template from './components/Template'
import TodoList from './components/TodoList';
import { useState } from 'react';
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import TodoInsert from './components/TodoInsert';
// nextId가 계속 증가하려면 App 함수가 리렌더링 하지 않는 곳에 선언해야해서
// 바깥에 선언

let nextId = 4;

// id로 key값 주고 text에 입력값 checked 완료 미완료 
const App = () => {
  const [insertToggle, setInsertToggle] = useState(false)
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "할일 쓰기 1 ",
      checked: true
    },
    {
      id:2,
      text: "할일 쓰기 2",
      checked: false
    }, {
      id:3,
      text: "할일 쓰기 3",
      checked: true
    },
  ])

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev)
  }

  const onInsertTodo = (text) => {
    if(text === "") {
      return alert('할일을 입력해주세요')

    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      // 왜 push를 안쓰냐면 원본이 변하기 때문에!
      // concat은 원본을 얕게 복사해서 만들기 때문에 
      setTodos(todos => todos.concat(todo))
      nextId++;
    }
  }

  const onCheckToggle = (id) => {
    // todo.id랑 인자로 받은 id가 일치한다면
    // 스프레드로 todo가 가져오는 객체속성을 다 받아오고 checked의 속성을 반대로 바꿔준다
    // 만약 같지 않다면 그냥 todo를 반환해준다. 
    setTodos(todos => todos.map(todo => (todo.id === id ? {...todo, checked: !todo.checked} : todo)))
  }
  return  (
  <Template todoLength={todos.length}>
    <TodoList todos={todos} onCheckToggle={onCheckToggle}/>
    <div className='plusbutton' onClick={onInsertToggle}>
    <FontAwesomeIcon icon={faCirclePlus} size="3x" />
    </div>
   { insertToggle && <TodoInsert 
    onInsertToggle={onInsertToggle} 
    onInsertTodo={onInsertTodo}/>}
    </Template>
  )
}

export default App;
