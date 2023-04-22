import { createRoot } from 'react-dom/client'
import App from 'src/app'
import { Provider } from 'react-redux'
import store from 'src/redux/store'

import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
