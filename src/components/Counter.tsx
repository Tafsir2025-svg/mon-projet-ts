import React, { Component } from 'react';

// Définir l'interface pour l'état du composant
interface CounterState {
  count: number; // 'count' est un nombre
}

class Counter extends Component<{}, CounterState> {
  // Définir l'état initial du compteur
  state: CounterState = {
    count: 0,
  };

  // Méthode pour incrémenter le compteur
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Rendu du composant
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
