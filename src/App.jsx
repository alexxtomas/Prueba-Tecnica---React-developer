import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/series' element={<Series />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </>
  )
}

export default App
