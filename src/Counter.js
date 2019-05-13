import React from "react";
import { connect } from 'react-redux';
import { increment,decrement,reset} from './actions';

class Counter extends React.Component {
  // state = { count: 0 };

  // increment = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };

  // decrement = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   });
  // };
  // increment = () => {
  //   this.props.dispatch(increment());
  // };
  
  // decrement = () => {
  //   this.props.dispatch(decrement());
  // };
  // reset = () => {
  //   this.props.dispatch(reset());
  // };

  increment = () => {
    // We can call the `increment` prop,
    // and it will dispatch the action:
    this.props.increment();
  }
  
  decrement = () => {
    this.props.decrement();
  }

    
  reset = () => {
    this.props.reset();
  }

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <div> 
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}


// Add this function:
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// Then replace this:
// export default Counter;




// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`. 
const mapDispatchToProps = {
increment,
decrement,
reset
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
