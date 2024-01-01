import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Product from './pages/Product'
import Error from './pages/Error'
import PrivateRoute from './utils/PrivateRoute'
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path="*" element={<Error />} />
          <Route element={<PrivateRoute />}>
            <Route path='/home' element={<Home />} />
            <Route path='/product' element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
