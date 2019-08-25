class IndecisionApp extends React.Component{
    
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.removeAllTodo = this.removeAllTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.state = {
            tododata: []
        }
    }

    componentDidMount() {
        // FETCHING DATA
        console.log("component did mount");
        const json = localStorage.getItem('tododata');
        const todos = JSON.parse(json);

        if(todos) {
            this.setState(() => ({
                tododata: todos
            }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // UPDATE DATA
        if(prevState.tododata.length !== this.state.tododata.length){
            const json = JSON.stringify(this.state.tododata);
            localStorage.setItem('tododata', json);
            console.log("component did update");
        }
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    addTodo(text) {

        if(!text) {
            return "You need to input something!"
        }else if(this.state.tododata.indexOf(text) > -1) {
            return "This is already exist!"
        }else{
            this.setState((state) => ({
                tododata: state.tododata.concat(text)
            }))
            return undefined;
        }
    }

    removeTodo(text) {
        this.setState((state) => ({
            tododata: state.tododata.filter((todo) => text !== todo)
        }));
    }

    removeAllTodo() {
        this.setState(() => ({
            tododata: []
        }));
    }
    
    render() {
        const title = "My React Todo apps.";
        const subtitle = "To learn effectively you need create a todo, so you know what's your goal is.";

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <TodoList 
                    listdata={this.state.tododata}
                    deleteHandler={this.removeTodo}
                />
                <ActionTodo 
                    listdata={this.state.tododata} 
                    haslist={this.state.tododata.length > 0} 
                    addHandler={this.addTodo}
                    deleteHandler={this.removeAllTodo}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    ); 
}

const TodoList = (props) => {
    return (
        <div>
            {props.listdata.length == 0 ? <p>There are nothing here, you need to add something todo!</p> : <p>Things you need to do:</p>}
            <ol>
                {props.listdata.map((val, i) => (
                    <li key={i}>{val} <button onClick={(e) => {
                        props.deleteHandler(val)
                    }}>remove</button></li>
                ))}
            </ol>
        </div>
    ); 
}

class ActionTodo extends React.Component{

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        const input = e.target.elements.todos.value.trim();
        const error = this.props.addHandler(input);
       
        this.setState(() => ({error}));

        if(!error) {
            e.target.elements.todos.value = "";
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <small><strong>{this.state.error}</strong></small>
                <br />
                <input type="text" placeholder="some todo.." name="todos" />
                <button>add todo</button>
                <button onClick={this.props.deleteHandler} disabled={!this.props.haslist}>remove todos</button>
            </form>
        ); 
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));