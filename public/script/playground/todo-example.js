"use strict";

console.log("App.js is running");

// INITIALIZATION

var appdata = {
    title: "My first react app!",
    subtitle: "Coding in progress.",
    todo: [],
    getTodo: function getTodo() {
        return React.createElement(
            "ol",
            null,
            this.todo.map(function (dt, i) {
                return React.createElement(
                    "li",
                    { key: i },
                    dt
                );
            })
        );
    },
    addTodo: function addTodo(todosomething) {
        this.todo.push(todosomething);
    },
    deleteTodo: function deleteTodo(value) {
        var index = this.todo.indexOf(value);
        console.log(index);
    },
    removeAll: function removeAll() {
        this.todo = [];
    }
};

// FUNCTIONALITY
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var todo = e.target.elements.todos.value;
    if (todo) {
        appdata.addTodo(todo);
        e.target.elements.todos.value = '';
        renderApp();
    }
};

var onDeleteTodo = function onDeleteTodo(val) {
    console.log(val);
    appdata.deleteTodo(val);
};

var onRemoveAllTodo = function onRemoveAllTodo() {
    appdata.removeAll();
    renderApp();
};

// TEMPLATE JSX
var renderApp = function renderApp() {
    var todoForm = React.createElement(
        "form",
        { onSubmit: onFormSubmit },
        React.createElement("input", { type: "text", placeholder: "some todo..", name: "todos" }),
        React.createElement(
            "button",
            null,
            "add todo"
        ),
        React.createElement(
            "button",
            { disabled: appdata.todo.length > 0 ? false : true, onClick: onRemoveAllTodo },
            "remove todos"
        )
    );

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            appdata.title
        ),
        appdata.subtitle && React.createElement(
            "p",
            null,
            appdata.subtitle
        ),
        appdata.todo.length > 0 ? React.createElement(
            "p",
            null,
            "There is a lot of todo. Keep moving forward."
        ) : React.createElement(
            "p",
            null,
            "Add to do list what you should learn first."
        ),
        appdata.getTodo(),
        React.createElement("hr", null),
        todoForm
    );
    var app = document.getElementById('app');
    ReactDOM.render(template, app);
};

renderApp();