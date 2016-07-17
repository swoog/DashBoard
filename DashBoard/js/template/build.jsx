import React, {Component} from "react";

class Build extends Component {
    render () {
        if (!this.props.data.builds) {
            return <div className="tile">Loading...</div>;
        }

        var lastBuild = this.props.data.builds.value[0];
        if (!lastBuild) {
            return <div className="tile">Last build not found</div>;
        }

        if (lastBuild.result === "failed") {
            var urlImage = lastBuild.requestedFor.imageUrl;
            //urlImage = urlImage.replace('https://', 'https://au')
            return <div className="tile red">{lastBuild.definition.name}<br />
            {lastBuild.requestedFor.displayName}
            <img src={lastBuild.requestedFor.imageUrl} />
            </div>;
        }

        return <div className="tile green">{lastBuild.definition.name}</div>;
    }
}

export default Build;
