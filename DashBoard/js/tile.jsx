import React, { Component, PropTypes } from "react";
import Build from "./template/build";

class Tile extends Component{
    render () {
        switch(this.props.data.type) {
            case 'build':
                return <Build data={this.props.data} />;
            default:
                return <div className="tile">Hello {this.props.data.name}</div>;
        }
    }
}

export default Tile;
