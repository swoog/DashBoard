import React,{ Component, PropTypes } from "react";

class BackLogItem extends Component{
    render () {
        var classNameState = 'backLogItem ' + this.props.data.state;
        return <div className={classNameState}><span className="id">{this.props.data.id}</span> - {this.props.data.title}
                    <div className="effort">
                        {this.props.data.effort}
                    </div>
                </div>;
    }
}


class BackLogItems extends Component{
    render () {
        var items = this.props.data.map(d => <BackLogItem key={d.id} data={d}/>);
            return <div className="items">
                   {items}
                   </div>;
    }
}

class SprintBoard extends Component{
    render() {
        return <div className="sprint">
                   <div className="name">{this.props.data.name} - <small>{this.props.data.sprintLog.length} items</small>
                   </div>
                   <div className="totalEffort">
                       {this.props.data.effort}
                   </div>
                    <BackLogItems data={this.props.data.sprintLog} />
               </div>;
    }
}


class SprintsBoard extends Component{
    render() {
        var sprints = this.props.data.sprints.map(d => <SprintBoard key={d.name} data={d} />);

        return <div>
                    <div>{sprints}</div>
                    <div className="backLog">
                        <div className="name">
                            BackLog
                        </div>
                        <BackLogItems data={this.props.data.backLog} />
                    </div>
               </div>;
    }
}

export default SprintsBoard;
