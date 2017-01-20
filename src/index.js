import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import store from './store'
import { Provider } from 'react-redux'
import { fetchTracks } from './actions/fetchTracks'

// store.dispatch(fetchTracks('90s hip hop'))

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
