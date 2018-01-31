import React from "react"
import _ from "lodash"

export default class ToDoListItem extends React.Component {
    doneListChange(index) {
        let items = this.props.willDoItem
        items[index].done = !items[index].done
        if (items[index].done) {
            items.splice(index, 1)
        }
        this.setState({
            items: items
        })
    }
    render() {
        return (_.map(this.props.willDoItem, (item, index) => {
            return (
                <tr key={item.id}>
                    <td>{item.action}</td>
                    <td>
                        <input type="checkbox" checked={item.done} onChange={this.doneListChange.bind(this, index)} />
                    </td>
                    <td>{item.done.toString()}</td>
                </tr>
            )
        })

        )
    }
}