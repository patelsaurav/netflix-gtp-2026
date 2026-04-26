import './App.css'
import Body from './components/Body.jsx';
import { store } from './utils/appStore.js'
import { Provider } from 'react-redux'
function App() {

  return (
    <>
      <Provider store={store}>
        <Body />
      </Provider>
    </>
  )
}

export default App
