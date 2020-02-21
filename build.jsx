const React = require("react");
const ReactDom = require("react-dom");
import Lever from "./lever";
import Clock from "./clock";

function App() {
    return (
        <div>
            <Clock />
            <Lever />
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDom.render(
        <App />,
        document.getElementById('root')
    );
});
