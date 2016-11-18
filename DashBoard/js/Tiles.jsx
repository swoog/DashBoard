import React from "react";
import Tile from "./tile";

var Tiles = React.createClass({
    render: function() {
        var tiles = this.props.data.map(d => <Tile data={d} />);

        return <div className="tiles">{tiles}</div>;
    }
});
// test

export default Tiles;
