import linkState from 'react-link-state';
import React, { Component, PropTypes } from "react";
import {addSprintBoard, closeSettings, removeBoard} from "./actions";

class SprintBoardSetting extends Component{
    removeBoard() {
        this.props.dispatch(removeBoard(this.props.index));    
    }
    render() {
        return (<div>{this.props.data.name}<button onClick={this.removeBoard.bind(this)}>Remove</button></div>);
    }
}

class BoardSetting extends Component{
    render() {
        return (<SprintBoardSetting dispatch={this.props.dispatch} index={this.props.index} data={this.props.data} />);
    }
}

class Settings extends Component{
    createSprintBoard() {
        this.props.dispatch(addSprintBoard(this.refs.name.value, this.refs.url.value, this.refs.project.value, this.refs.patToken.value));
    }
    closeSettings() {
        this.props.dispatch(closeSettings());    
    }
    render () {
        var boardsSettings = [];
        if (this.props.data.boards != null) {
            var i = 0;
            boardsSettings = this.props.data.boards.map(b => {
                return <BoardSetting key={i} data={b} dispatch={this.props.dispatch} index={i++} />;
            });
        }
        return (<div className="settings">
                    <h2>Add VSTS Sprint boards :</h2>
                    <label htmlFor="name">Name of board :</label> <input id="name" ref='name' type="text" /><br />
                    <label htmlFor="url">VSTS url : </label> <input id="url" ref='url' type="text" /><br />
                    <label htmlFor="project">VSTS projet name :</label> <input id="project" ref='project' type="text" /><br />
                    <label htmlFor="patToken">VSTS PAT token :</label> <input id="patToken" ref='patToken' type="text" /><br />
                    <button onClick={this.createSprintBoard.bind(this)}>Add Sprint Board</button>
                    <div>
                        <h2>Boards</h2>
                       {boardsSettings}
                       <button onClick={this.closeSettings.bind(this)}>Close</button>
                    </div>
                </div>);
    }
}

export default Settings;
