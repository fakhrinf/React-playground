const app = document.getElementById('app');

let count = 0;

const increment = () => {
    count += 1;
    console.log(count);
    renderpage();
}

const decrement = () => {
    count = (count > 0) ? count - 1 : count;
    console.log(count);
    renderpage();
}

const reset = () => {
    count = 0;
    console.log(count);
    renderpage();
}

// JSX TEMPLATE RENDER
const renderpage = () => {
    const template = (
        <div>
            <h1>Counter: {count}</h1>
            <button id="increment" className="btn" onClick={increment}>+1</button>
            <button id="decrement" className="btn" onClick={decrement}>-1</button>
            <button id="resetbtn" className="btn" onClick={reset}>RESET</button>
        </div>
    );

    ReactDOM.render(template, app);
}

renderpage();