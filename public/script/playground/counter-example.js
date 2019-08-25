"use strict";

var app = document.getElementById('app');

var count = 0;

var increment = function increment() {
    count += 1;
    console.log(count);
    renderpage();
};

var decrement = function decrement() {
    count = count > 0 ? count - 1 : count;
    console.log(count);
    renderpage();
};

var reset = function reset() {
    count = 0;
    console.log(count);
    renderpage();
};

// JSX TEMPLATE RENDER
var renderpage = function renderpage() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Counter: ",
            count
        ),
        React.createElement(
            "button",
            { id: "increment", className: "btn", onClick: increment },
            "+1"
        ),
        React.createElement(
            "button",
            { id: "decrement", className: "btn", onClick: decrement },
            "-1"
        ),
        React.createElement(
            "button",
            { id: "resetbtn", className: "btn", onClick: reset },
            "RESET"
        )
    );

    ReactDOM.render(template, app);
};

renderpage();