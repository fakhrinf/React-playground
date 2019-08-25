"use strict";

console.log("App.js is running");

// INITIALIZATION

var appdata = {
    title: "My first react app!",
    subtitle: "Coding in progress."

    // FUNCTIONALITY
};var shown = false;
var onToggleBtn = function onToggleBtn() {
    shown = !shown;
    renderApp();
};

// TEMPLATE JSX
var renderApp = function renderApp() {
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
        React.createElement("hr", null),
        React.createElement(
            "button",
            { onClick: onToggleBtn },
            shown ? 'Show Details' : 'Hide Details'
        ),
        shown && React.createElement(
            "p",
            null,
            "Hello Whatsup Bro!"
        )
    );
    var app = document.getElementById('app');
    ReactDOM.render(template, app);
};

renderApp();