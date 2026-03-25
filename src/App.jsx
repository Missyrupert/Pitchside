import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Situations from './pages/Situations'
import SituationDetail from './pages/SituationDetail'
import Drills from './pages/Drills'
import DrillDetail from './pages/DrillDetail'
import MatchDayBrain from './pages/MatchDayBrain'
import BeforeSession from './pages/BeforeSession'
import DuringSession from './pages/DuringSession'
import AfterSession from './pages/AfterSession'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/situations" element={<Situations />} />
        <Route path="/situations/:id" element={<SituationDetail />} />
        <Route path="/drills" element={<Drills />} />
        <Route path="/drills/:id" element={<DrillDetail />} />
        <Route path="/match-day" element={<MatchDayBrain />} />
        <Route path="/match-day/before" element={<BeforeSession />} />
        <Route path="/match-day/during" element={<DuringSession />} />
        <Route path="/match-day/after" element={<AfterSession />} />
      </Route>
    </Routes>
  )
}
