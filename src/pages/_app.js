import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '@/redux/reduxConfig'

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}
