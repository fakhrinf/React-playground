'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.addTodo = _this.addTodo.bind(_this);
        _this.removeAllTodo = _this.removeAllTodo.bind(_this);
        _this.removeTodo = _this.removeTodo.bind(_this);
        _this.state = {
            tododata: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // FETCHING DATA
            console.log("component did mount");
            var json = localStorage.getItem('tododata');
            var todos = JSON.parse(json);

            if (todos) {
                this.setState(function () {
                    return {
                        tododata: todos
                    };
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            // UPDATE DATA
            if (prevState.tododata.length !== this.state.tododata.length) {
                var json = JSON.stringify(this.state.tododata);
                localStorage.setItem('tododata', json);
                console.log("component did update");
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("component will unmount");
        }
    }, {
        key: 'addTodo',
        value: function addTodo(text) {

            if (!text) {
                return "You need to input something!";
            } else if (this.state.tododata.indexOf(text) > -1) {
                return "This is already exist!";
            } else {
                this.setState(function (state) {
                    return {
                        tododata: state.tododata.concat(text)
                    };
                });
                return undefined;
            }
        }
    }, {
        key: 'removeTodo',
        value: function removeTodo(text) {
            this.setState(function (state) {
                return {
                    tododata: state.tododata.filter(function (todo) {
                        return text !== todo;
                    })
                };
            });
        }
    }, {
        key: 'removeAllTodo',
        value: function removeAllTodo() {
            this.setState(function () {
                return {
                    tododata: []
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "My React Todo apps.";
            var subtitle = "To learn effectively you need create a todo, so you know what's your goal is.";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(TodoList, {
                    listdata: this.state.tododata,
                    deleteHandler: this.removeTodo
                }),
                React.createElement(ActionTodo, {
                    listdata: this.state.tododata,
                    haslist: this.state.tododata.length > 0,
                    addHandler: this.addTodo,
                    deleteHandler: this.removeAllTodo
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var TodoList = function TodoList(props) {
    return React.createElement(
        'div',
        null,
        props.listdata.length == 0 ? React.createElement(
            'p',
            null,
            'There are nothing here, you need to add something todo!'
        ) : React.createElement(
            'p',
            null,
            'Things you need to do:'
        ),
        React.createElement(
            'ol',
            null,
            props.listdata.map(function (val, i) {
                return React.createElement(
                    'li',
                    { key: i },
                    val,
                    ' ',
                    React.createElement(
                        'button',
                        { onClick: function onClick(e) {
                                props.deleteHandler(val);
                            } },
                        'remove'
                    )
                );
            })
        )
    );
};

var ActionTodo = function (_React$Component2) {
    _inherits(ActionTodo, _React$Component2);

    function ActionTodo(props) {
        _classCallCheck(this, ActionTodo);

        var _this2 = _possibleConstructorReturn(this, (ActionTodo.__proto__ || Object.getPrototypeOf(ActionTodo)).call(this, props));

        _this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(ActionTodo, [{
        key: 'onFormSubmit',
        value: function onFormSubmit(e) {
            e.preventDefault();
            var input = e.target.elements.todos.value.trim();
            var error = this.props.addHandler(input);

            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.todos.value = "";
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.onFormSubmit },
                React.createElement(
                    'small',
                    null,
                    React.createElement(
                        'strong',
                        null,
                        this.state.error
                    )
                ),
                React.createElement('br', null),
                React.createElement('input', { type: 'text', placeholder: 'some todo..', name: 'todos' }),
                React.createElement(
                    'button',
                    null,
                    'add todo'
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.deleteHandler, disabled: !this.props.haslist },
                    'remove todos'
                )
            );
        }
    }]);

    return ActionTodo;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));