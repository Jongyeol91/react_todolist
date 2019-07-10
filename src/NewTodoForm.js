import React, { Component } from 'react'

class newTodoForm extends Component {
    state = {
        task: ""
    }

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addTodo(this.state);
        this.setState({task:""})
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder="새로할일"
                        id="task"
                        name="task"
                        onChange={this.handleChange}
                        value={this.state.task} >
                    </input>
                    <button>입력</button>
                </form>
            </div>
        )
    }
}

export default newTodoForm