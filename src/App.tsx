import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Login from './routes/Login'
import Register from './routes/Register'
import { Provider } from 'react-redux'
import store from './redux/store'
import Toast from './components/Toast'
import Root from './routes/Root'
import AuthLayout from './routes/layouts/AuthLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path='/'
        element={<Root />}
      ></Route>
      <Route element={<AuthLayout />}>
        <Route
          path='login'
          element={<Login />}
        />
        <Route
          path='register'
          element={<Register />}
        />
      </Route>
    </>
  )
)

function App() {
  return (
    <Provider store={store}>
      <div className='max-h-screen h-screen min-h-screen overflow-hidden overflow-y-hidden'>
        <RouterProvider router={router} />
      </div>
      <Toast />
    </Provider>
  )
}

export default App
