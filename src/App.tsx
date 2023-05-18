import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Provider } from 'react-redux'
import { store } from './store'
import { PrivateRoutes } from './components/PrivateRoutes'
import { Home } from './pages/Home'

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path='/' element={<Home />}/>
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    </Provider>
  )
}

export default App
