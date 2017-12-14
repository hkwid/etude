import React from 'react';
import { Provider, connect } from 'react-redux';
import { configureStore } from '../store';
import { changeInput } from '../reducer/actions';

const SearchPedia = ({ word, result, changeInput }) => (
  <div>
    <input
      type="text"
      value={word}
      onChange={e => changeInput(e.target.value)}
    />
    <h3>Result</h3>
    <ul>{result.map((r, i) => <li key={i}>{r}</li>)}</ul>
  </div>
);

const SearchPediaContainer = connect(state => state, { changeInput })(
  SearchPedia
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <SearchPediaContainer />
      </Provider>
    );
  }
}
