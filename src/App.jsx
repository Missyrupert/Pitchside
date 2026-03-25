import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Situations from './pages/Situations'
import SituationDetail from './pages/SituationDetail'
import Drills from './pages/Drills'
import DrillDetail from './pages/DrillDetail'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/situations" element={<Situations />} />
        <Route path="/situations/:id" element={<SituationDetail />} />
        <Route path="/drills" element={<Drills />} />
        <Route path="/drills/:id" element={<DrillDetail />} />
      </Route>
    </Routes>
  )
}
