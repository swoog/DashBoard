import linkState from 'react-link-state';
import React, { Component, PropTypes } from "react";
import {addSprintBoard, closeSettings} from "./actions";

class SprintBoardSetting extends Component{
    render() {
        return (<div>{this.props.data.name}</div>);
    }
}

class BoardSetting extends Component{
    render() {
        return (<SprintBoardSetting data={this.props.data} />);
    }
}

class Settings extends Component{
    createSprintBoard() {
        this.props.dispatch(addSprintBoard(this.refs.name.value, this.refs.url.value, this.refs.project.value));
    }
    closeSettings() {
        this.props.dispatch(closeSettings());    
    }
    render () {
        var boardsSettings = [];
        if (this.props.data.boards != null) {
            var i = 0;
            boardsSettings = this.props.data.boards.map(b => {
                return <BoardSetting key={i++} data={b} />;
            });
        }
        return (<div>
                    VSTS Project :
                    <input ref='name' type="text" />
                    <input ref='url' type="text" />
                    <input ref='project' type="text" />
                    <button onClick={this.createSprintBoard.bind(this)}>Add Sprint Board</button>
                    <div>
                       {boardsSettings}
                       <button onClick={this.closeSettings.bind(this)}>Close</button>
                    </div>
                </div>);
    }
}

export default Settings;
