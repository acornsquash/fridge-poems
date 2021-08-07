import React from 'react'
import { ReactDOM } from 'react'
import {Provider} from 'react-redux'

import store from './Reducer'
import App from './App'

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('main')
  )
  