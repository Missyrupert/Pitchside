import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RecentlyViewed, {
  getRecentlyViewed,
  clearRecentlyViewed,
} from '../components/RecentlyViewed'

export default function Home() {
  const navigate = useNavigate()
  const [recent, setRecent] = useState([])

  useEffect(() => {
    setRecent(getRecentlyViewed())
  }, [])

  const handleClear = () => {
    clearRecentlyViewed()
    setRecent([])
  }

  return (
    <div>
      <div className="text-center mb-8 mt-2">
        <h2 className="text-2xl font-extrabold text-green-primary mb-1">
          Pitchside
        </h2>
        <p className="text-gray-500 text-sm">
          Your grassroots coaching companion
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={() => navigate('/situations')}
          className="bg-green-primary hover:bg-green-light text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all active:scale-[0.98] min-h-[120px]"
        >
          <div className="text-4xl mb-3">🗣️</div>
          <div className="text-xl font-bold">Situations</div>
          <div className="text-green-200 text-sm mt-1">
            Handle tricky moments
          </div>
        </button>

        <button
          onClick={() => navigate('/drills')}
          className="bg-orange-accent hover:bg-orange-light text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all active:scale-[0.98] min-h-[120px]"
        >
          <div className="text-4xl mb-3">⚽</div>
          <div className="text-xl font-bold">Drills</div>
          <div className="text-orange-200 text-sm mt-1">
            Session plans & activities
          </div>
        </button>
      </div>

      <RecentlyViewed items={recent} onClear={handleClear} />
    </div>
  )
}
