import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RecentlyViewed, {
  getRecentlyViewed,
  clearRecentlyViewed,
} from '../components/RecentlyViewed'
import CategoryBadge from '../components/CategoryBadge'

/** IDs from src/data/situations.json and src/data/drills.json */
const QUICK_START = [
  {
    kind: 'situation',
    to: '/situations/1',
    badge: 'Situation',
    title: 'Parent Questioning Selection',
    description:
      "What to say when a parent asks why their child isn't playing more",
  },
  {
    kind: 'situation',
    to: '/situations/5',
    badge: 'Situation',
    title: 'Child Refuses to Be Substituted',
    description: "Calm response when a child won't come off the pitch",
  },
  {
    kind: 'drill',
    to: '/drills/5',
    badge: 'Drill',
    title: '1v1 Channel Defending',
    description: 'Classic defending drill for building 1v1 confidence',
  },
]

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

      <section className="mt-8">
        <h2 className="text-lg font-bold text-charcoal mb-3">Quick Start</h2>
        <div className="space-y-2">
          {QUICK_START.map((item) => (
            <button
              key={`${item.kind}-${item.to}`}
              type="button"
              onClick={() => navigate(item.to)}
              className="w-full text-left bg-light-grey rounded-xl p-4 flex items-start gap-3 hover:shadow-md transition-shadow active:scale-[0.99] min-h-[4.5rem]"
            >
              <CategoryBadge category={item.badge} small />
              <div className="min-w-0 flex-1">
                <div className="font-medium text-charcoal">{item.title}</div>
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                  {item.description}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 ml-auto shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ))}
        </div>
      </section>

      <RecentlyViewed items={recent} onClear={handleClear} />
    </div>
  )
}
