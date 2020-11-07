import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        return (
            <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-success btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}> + </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm"> - </button>
            </div>
        )
    }

    renderTags = () => {
        if (this.state.tags.length === 0) return <p>No tags</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    formatCount = () => {
        const count = this.props.counter.value;
        return count === 0 ? 'Zero' : count;
    }

    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;