import React, { Component } from 'react';
import CounterControl from '../../components/Control/CounterControl';
import CounterOutput from '../../components/Output/CounterOutput';
import { connect } from 'react-redux';
import * as counterActions from './../../redux/actions/counter';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={() => this.props.onIncrement_5}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onDecrement_5}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(counterActions.increment()),
        onDecrement: () => dispatch(counterActions.decrement()),
        onIncrement_5: () => dispatch(counterActions.add()),
        onDecrement_5: () => dispatch(counterActions.subtract())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);