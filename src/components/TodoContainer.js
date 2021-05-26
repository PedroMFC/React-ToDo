import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {

    state = {
        identificador: 4,
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
    };
    
    handleChange = (id) => {
      this.setState(prevState => ({
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        }),
      }))
    };

    delTodo = (id) => {
      console.log("Borrado", id);
      this.setState({
        todos: 
          this.state.todos.filter(todo => {
            return todo.id !== id;
          })
      });
    };

    addTodoItem = title => {
      console.log(title);
      this.setState({
        identificador : this.state.identificador + 1
      })
      const newTodo = {
        id: this.state.identificador,
        title: title,
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    };

    render() {
        return (
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={this.addTodoItem}/>
              <TodosList todos={this.state.todos} 
                        handleChangeProps={this.handleChange}
                        deleteTodoProps={this.delTodo} />
            </div>
          </div>
        );
    }
}

export default TodoContainer