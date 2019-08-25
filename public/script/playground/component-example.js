"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp() {
        _classCallCheck(this, IndecisionApp);

        return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
    }

    _createClass(IndecisionApp, [{
        key: "render",
        value: function render() {
            var title = "My React Todo apps.";
            var subtitle = "To learn effectively you need create a todo, so you know what's your goal is.";
            var options = ['task one', 'task two', 'task three'];

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(TodoList, { list: options }),
                React.createElement(ActionTodo, { listdata: options })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var TodoList = function (_React$Component3) {
    _inherits(TodoList, _React$Component3);

    function TodoList() {
        _classCallCheck(this, TodoList);

        return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
    }

    _createClass(TodoList, [{
        key: "render",
        value: function render() {

            var list = this.props.list;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Things you need to do:"
                ),
                React.createElement(
                    "ol",
                    null,
                    list.map(function (val, i) {
                        return React.createElement(
                            "li",
                            { key: i },
                            val
                        );
                    })
                )
            );
        }
    }]);

    return TodoList;
}(React.Component);

var ActionTodo = function (_React$Component4) {
    _inherits(ActionTodo, _React$Component4);

    function ActionTodo(props) {
        _classCallCheck(this, ActionTodo);

        var _this4 = _possibleConstructorReturn(this, (ActionTodo.__proto__ || Object.getPrototypeOf(ActionTodo)).call(this, props));

        _this4.removealltodo = _this4.removealltodo.bind(_this4);
        return _this4;
    }

    _createClass(ActionTodo, [{
        key: "onFormSubmit",
        value: function onFormSubmit(e) {
            e.preventDefault();
            var input = e.target.elements.todos.value.trim();
            if (input) {
                console.log(input);
                e.target.elements.todos.value = "";
            }
        }
    }, {
        key: "removealltodo",
        value: function removealltodo() {
            console.log(this.props.listdata);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.onFormSubmit },
                React.createElement("input", { type: "text", placeholder: "some todo..", name: "todos" }),
                React.createElement(
                    "button",
                    null,
                    "add todo"
                ),
                React.createElement(
                    "button",
                    { onClick: this.removealltodo },
                    "remove todos"
                )
            );
        }
    }]);

    return ActionTodo;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));