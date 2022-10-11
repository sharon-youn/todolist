import React from 'react'
import './Template.css'
const Template = ({children, todoLength}) => {
    return (
        <div className='Template'>
        <div className='title'>To-do-list ({todoLength})</div>
        {/* <div>여기는 할일 목록이 들어갑니다.</div> */}
        <div>{children}</div>
        </div>
    )
}
export default Template;