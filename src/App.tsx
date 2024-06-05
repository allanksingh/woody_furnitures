import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import ProductPage from './pages/products'
import AboutPage from './pages/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<ProductPage />} path='/products' />
        <Route element={<AboutPage />} path='/about' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
