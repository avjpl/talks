import * as React from 'react'

export default class TodoInput extends React.Component {
    addItem(e) {
        e.preventDefault()
        this.props.onAddItem(this.refs['input'].value)
        console.log('additem', this.refs['input'].value)
        this.refs['input'].value = ''
    }

    render() {
        return <form onSubmit={this.addItem.bind(this)}>
            Add item: <input type='text' ref='input' onChange={() => { console.log('test')}} />
            <button type='submit'>Add</button>
        </form>
    }
}
