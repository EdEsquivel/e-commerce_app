import './App.css'
import { Layout } from './components/Layout'
import store from './store'
import { Products } from './views/Products'
import { Provider } from "react-redux"

function App() {

  return (
    <>
      <Provider store={store}>
        <Layout>
          <Products />
        </Layout>
      </Provider>
    </>
  )
}

export default App
