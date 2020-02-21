var React = require("react");

class Lever extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggle: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggle: !state.isToggle
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Lever is {this.state.isToggle ? "On" : "off"}
            </button>
        )
    }
}

export default Lever;