import React from 'react'
import './Template.css'

//어플리케이션을 구조를 담당함
// 위쪽에 글씨 담당 

// Template 안에 다른 컴포넌트를 넣기위해 children을 인자로 받아와서
// 글씨 밑에 쭉 컴포넌트를 보여주고 있음

const Template = ({children, todoLength}) => {
    return (
        <div className='Template'>
        <div className='title'>What's up, Sharon! ({todoLength})</div>
        {/* <div>여기는 할일 목록이 들어갑니다.</div> */}
        <div className='today'>TODAY'S TASKS</div>
        <div>{children}</div>
        </div>
    )
}
export default Template;