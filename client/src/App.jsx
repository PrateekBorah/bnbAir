import './App.css'
import { Route, Routes } from 'react-router-dom'
import Indexpage from './Pages/Indexpage'

function App() {

  return (
    <Routes>
      <Route index element={<Indexpage />} />
    </Routes>

  )
}

export default App
