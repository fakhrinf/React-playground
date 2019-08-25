class CounterApp extends React.Component {

    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            }
        });
    }

    decrement() {
        this.setState((prevState) => {
            return {
                count: (prevState.count > 0) ? prevState.count - 1 : prevState.count
            }
        });
    }

    resetCounter() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.resetCounter}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<CounterApp/>, document.getElementById('app'));