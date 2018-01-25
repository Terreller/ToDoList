import React from 'react'
import ToDoList from './components/ToDoList/ToDoList'

// 留言板原始数据
const messageBoard = {
    user: 'Leon',
    items: [{ action: "买牙膏", done: false, id: 1 },
    { action: "给张三发邮件", done: false, id: 2 },
    { action: "给李四打电话", done: false, id: 3 },
    { action: "还信用卡", done: false, id: 4 }]
}

export default class App extends React.Component {
    // 渲染
    render() {
        return (
            <div>
                <ToDoList user={messageBoard.user} items={messageBoard.items} />
            </div>
        )
    }
}