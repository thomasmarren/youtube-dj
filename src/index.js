import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import store from './store'
import { Provider } from 'react-redux'
import { fetchVideos } from './actions/fetchVideos'

store.dispatch(fetchVideos('90s Hip Hop'))

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
