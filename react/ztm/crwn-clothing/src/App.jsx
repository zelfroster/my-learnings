import { Routes, Route } from 'react-router-dom'
import Home from "./routes/home/home.component"
import Nav from './routes/nav/nav.component'
import Auth from './routes/auth/auth.component'
import Shop from './routes/shop/shop.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Auth />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
