import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const {onReset, onDelete, onIncrement} = this.props;
        return (
            <div>
            <button className="btn-info btn-sm" 
                onClick={onReset}
            >Reset</button>
            {this.props.counters.map(
                counter => <Counter 
                key = {counter.id}
                onIncrement={onIncrement}
                onDelete={onDelete}
                counter={counter}/>
            )}
            </div>
          );
    }
}
 
export default Counters;