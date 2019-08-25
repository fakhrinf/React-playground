console.log("App.js is running");

// INITIALIZATION

const appdata = {
    title: "My first react app!",
    subtitle: "Coding in progress.",
}

// FUNCTIONALITY
let shown = false;
const onToggleBtn = () => {
    shown = !shown;
    renderApp();
}

// TEMPLATE JSX
const renderApp = () => {
    const template = (
        <div>
            <h1>{appdata.title}</h1>
            {appdata.subtitle && <p>{appdata.subtitle}</p>}
            <hr/>
            <button onClick={onToggleBtn}>{shown ? 'Show Details' : 'Hide Details'}</button>
            {shown && <p>Hello Whatsup Bro!</p>}
        </div>
    );
    const app = document.getElementById('app');
    ReactDOM.render(template, app);
}

renderApp();