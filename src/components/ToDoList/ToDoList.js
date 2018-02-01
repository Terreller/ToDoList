import React from 'react'
import cs from 'classnames'
import ToDoListItem from './ToDoListItem'
export default class Todolist extends React.Component {
    constructor() {
        super()
        this.state = {
            items: []
        }
    }
    componentWillMount() {
        this.setState({
            items: this.props.items
        })
    }
    addList() {
        let txtValue = this.refs.inputEl.value
        if (txtValue == '') {
            return alert('请输入正确的内容')
        }
        let obj = {
            action: txtValue,
            done: false,
            id: Date.now()
        }
        let items = this.state.items
        items.push(obj)
        this.setState({
            items: items
        })
        this.refs.inputEl.value = ''
    }
    doneListChange(index) {
        let items = this.state.items
        items[index].done = !items[index].done
        if (items[index].done) {
            items.splice(index, 1)
        }
        this.setState({
            items: items
        })
    }
    // 渲染
    render() {
        let len = this.state.items.filter(item => !item.done).length
        return (
            <div className="container">
                <div className="page-header">
                    <h1>
                        {this.props.user}待办事项
                        <span className={cs('label label-default', { 'label-warning': len > 2, 'label-success': len <= 2 })}>{len}</span>
                    </h1>
                </div>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="添加任务" ref='inputEl' />
                    <span className="input-group-btn">
                        <button className="btn btn-default btn-success" type="button" onClick={this.addList.bind(this)}>添加</button>
                    </span>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>详细内容</th>
                            <th>是否完成</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ToDoListItem willDoItem={this.state.items} />
                    </tbody>
                </table>
            </div>
        )
    }
}
