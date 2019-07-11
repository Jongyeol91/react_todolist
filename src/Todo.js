import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {

    state = {
        isEditing: false,
        task: this.props.task,
    }

    handleRemove = () => {
        this.props.remove(this.props.id);
    }

    toggleForm = () => {
        this.setState({
            isEditing : !this.state.isEditing
        })  
    }

    handleUpdate = (evt) => {
        evt.preventDefault();
        this.props.update(this.props.id, this.state.task);
        this.setState({isEditing: false});
    }

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleToggleCompletion = () => {
        this.props.toggleCompletion(this.props.id)
    }

    render(){
        let result;
        if(this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type='text' name="task" onChange={this.handleChange} value={this.state.task}/>
                        <button>수정하기</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div>
                    <button onClick={this.toggleForm}>수정</button>
                    <button onClick={this.handleRemove}>지우기</button>
                    <li className={this.props.completed ? "completed" : ""}>{this.props.task}</li>
                    <button onClick={this.handleToggleCompletion}>완료</button>
                </div>
            )
        }
        return (
            <>
              {result}
               
                
            </>
        )
    }
}

export default Todo;