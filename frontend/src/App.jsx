import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Home from './pages/Home'
// import {Contact} from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quiz"  />
          <Route path="gallery"  />
          <Route path="contact" />
         
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
  )
}

export default App;
