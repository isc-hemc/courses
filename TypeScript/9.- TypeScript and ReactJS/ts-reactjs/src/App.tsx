import * as React from 'react';
import Counter from './components/Counter';

// interface IAppProps {}

interface IAppState {
  counterValue: number;
}


// React.Component it's a generic class: The first argument it's the app props and the
// second the app state.
class App extends React.Component<{}, IAppState> {
  public state = {counterValue: 0}

  public incrementHandler = () => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue + 1 };
    });
  };

  public decrementHandler = () => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue - 1 };
    });
  };

  public render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Counter counter={this.state.counterValue} />
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
      </div>
    );
  }
}

export default App;
