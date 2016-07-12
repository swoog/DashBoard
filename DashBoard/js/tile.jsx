import React, { Component, PropTypes } from "react";
import Service from "./service";
import Build from "./template/build";

class Tile extends Component{
    render () {
        if (this.props.data.type === 'build') {
            return <Build data={this.props.data} />;
        }

        return <div className="tile">Hello {this.props.data.name}</div>;
    }
}

export default Tile;
