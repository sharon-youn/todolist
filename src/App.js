import './App.css';
import Template from './components/Template'
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import TodoInsert from './components/TodoInsert';
import Loading from "./components/Loading.js"

// nextId가 계속 증가하려면 App 함수가 리렌더링 하지 않는 곳에 선언해야해서
// 바깥에 선언

let nextId = 4;

// id로 key값 주고 text에 입력값 checked 완료 미완료 
const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null)
  //로딩화면 true로 바꾸면 구현 가능!!
  const[ready, setReady] = useState(false);
  const [insertToggle, setInsertToggle] = useState(false)
  // 첫 화면에서 할일 목록을 보여줄 초기값을 객체형태의 배열로 설정
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "할일 추가!",
      checked: true
    },
    {
      id:2,
      text: "글씨를 클릭해보세요",
      checked: false
    }, {
      id:3,
      text: "체크박스를 눌러보세요",
      checked: true
    },
  ])

  const onInsertToggle = () => {
    if(selectedTodo) {
      setSelectedTodo(null);
    }
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

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo)
  }
 const onRemove = id => {
  onInsertToggle();
  setTodos(todos => todos.filter(todo => todo.id !== id))
 }
const onUpdate = (id, text) => {
  onInsertToggle();
  setTodos(todos => todos.map(
    todo => 
    todo.id === id ?  // 만약 todo.id와 id가 일치한다면
    {...todo, text}  // spread 연산자로 todo 객체의 모든 속성을 풀어주고 새로운 text 추가해서 다시 객체 안에 넣기
    : todo)) // 일치하지 않는 할일들은 그냥 냅두기
}
// x 버튼 누르면 화면으로 나가기
const onX = (id, text) => {
  onInsertToggle();

}
useEffect(()=>{        
  //뒤의 1000 숫자는 1초를 뜻함     
 //1초 뒤에 실행되는 코드들이 담겨 있는 함수     
       setTimeout(()=>{         
              //  setState(data)         
               setReady(false)     
        },3000)          

},[]) 

// 로딩 이미지 css 적용 전이라 Loading은 ready에서 false 기본값으로 해놨음 
  return  (
    ready ? 
    <Loading className="loading"/>
    :
  <Template todoLength={todos.length}>
    {/* todos를 써야하는 TodoList에 인자 받아오기 */}
    <TodoList 
    todos={todos} 
    onCheckToggle={onCheckToggle} 
    onInsertToggle={onInsertToggle}
    onChangeSelectedTodo={onChangeSelectedTodo}
     />
    <div className='plusbutton' onClick={onInsertToggle}>
    <FontAwesomeIcon icon={faCirclePlus} size="3x" />
    </div>

   { insertToggle && 
   (<TodoInsert 
    onInsertToggle={onInsertToggle} 
    onInsertTodo={onInsertTodo}
    selectedTodo={selectedTodo}
    onRemove={onRemove}
    onUpdate={onUpdate}
    onX={onX}
    />)}
    </Template>
 
   
  )
}

export default App;
