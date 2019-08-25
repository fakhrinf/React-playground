console.log("App.js is running");

// INITIALIZATION

const appdata = {
    title: "My first react app!",
    subtitle: "Coding in progress.",
    todo: [],
    getTodo() {
        return <ol>{this.todo.map((dt, i) => <li key={i}>{dt}</li>)}</ol>;
    },
    addTodo(todosomething) {
        this.todo.push(todosomething);
    },
    deleteTodo(value) {
        const index = this.todo.indexOf(value);
        console.log(index);
    },
    removeAll(){
        this.todo = [];
    }
}

// FUNCTIONALITY
const onFormSubmit = (e) => {
    e.preventDefault();

    const todo = e.target.elements.todos.value;
    if(todo) {
        appdata.addTodo(todo);
        e.target.elements.todos.value = '';
        renderApp();
    }
}

const onDeleteTodo = (val) => {
    console.log(val);
    appdata.deleteTodo(val);
}

const onRemoveAllTodo = () => {
    appdata.removeAll();
    renderApp();
}

// TEMPLATE JSX
const renderApp = () => {
    const todoForm = (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="some todo.." name="todos" />
            <button>add todo</button>
            <button disabled={appdata.todo.length > 0 ? false : true} onClick={onRemoveAllTodo}>remove todos</button>
        </form>
    );

    const template = (
        <div>
            <h1>{appdata.title}</h1>
            {appdata.subtitle && <p>{appdata.subtitle}</p>}
            {appdata.todo.length > 0 ? <p>There is a lot of todo. Keep moving forward.</p> : <p>Add to do list what you should learn first.</p>} 
            {appdata.getTodo()}
            <hr/>
            {todoForm}
        </div>
    );
    const app = document.getElementById('app');
    ReactDOM.render(template, app);
}

renderApp();