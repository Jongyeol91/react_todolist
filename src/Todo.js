import React, { Component } from 'react'

class Todo extends Component {

    handleRemove = () => {
        this.props.remove(this.props.id)
    }

    render(){
        return (
            <>
                <li>{this.props.task}</li>
                <button onClick={this.handleRemove}>지우기</button>
            </>
        )
    }
}

export default Todo;