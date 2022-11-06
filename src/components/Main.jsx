import { Route, Routes } from 'react-router-dom'
import { FilteredProgramsProvider } from '../context/FilteredPrograms'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Series from '../pages/Series'
const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/series' element={<FilteredProgramsProvider><Series /></FilteredProgramsProvider>} />
      <Route path='/movies' element={<FilteredProgramsProvider><Movies /></FilteredProgramsProvider>} />
    </Routes>
  )
}

export default Main
