import classes from "./Counter.module.css";
import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

// Redux Example for class based components
class CounterClass extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>

        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStatetoProp = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchtoProp = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: "increment" });
    },
    decrement: () => {
      dispatch({ type: "decrement" });
    },
  };
};

export default connect(mapStatetoProp, mapDispatchtoProp)(CounterClass);
