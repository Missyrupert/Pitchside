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

      {/* Match Day Brain — primary feature */}
      <button
        onClick={() => navigate('/match-day')}
        className="w-full bg-green-primary hover:bg-green-light text-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] mb-4"
      >
        <div className="text-4xl mb-3">🧠</div>
        <div className="text-xl font-bold">Match Day Brain</div>
        <div className="text-green-200 text-sm mt-1">
          Get a full session plan in 10 seconds. No guesswork.
        </div>
      </button>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => navigate('/situations')}
          className="bg-light-grey hover:bg-gray-200 text-charcoal rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
        >
          <div className="text-3xl mb-2">🗣️</div>
          <div className="text-lg font-bold">Situations</div>
          <div className="text-gray-500 text-xs mt-1">
            Tricky moments
          </div>
        </button>

        <button
          onClick={() => navigate('/drills')}
          className="bg-light-grey hover:bg-gray-200 text-charcoal rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
        >
          <div className="text-3xl mb-2">⚽</div>
          <div className="text-lg font-bold">Drills</div>
          <div className="text-gray-500 text-xs mt-1">
            Full drill library
          </div>
        </button>
      </div>

      <RecentlyViewed items={recent} onClear={handleClear} />
    </div>
  )
}
