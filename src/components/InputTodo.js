import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ""
      };

      onChange = e => {
        this.setState({
            title: e.target.value
          });
      };

      handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
          });
      };

    render() {
        return (
        <form onSubmit={this.handleSubmit} className="form-container">
            <input type="text" placeholder="Añadir Todo..." value={this.state.title}
                   onChange={this.onChange}/>
             <button className="input-submit">Añadir</button>
        </form>
        )
    }
}
export default InputTodo