import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ageGroups = ['U6', 'U8', 'U10', 'U12']
const goals = [
  { id: 'fun', label: 'Fun', emoji: '🎉' },
  { id: 'passing', label: 'Passing', emoji: '🎯' },
  { id: 'defending', label: 'Defending', emoji: '🛡️' },
  { id: 'confidence', label: 'Confidence', emoji: '💪' },
]
const playerOptions = ['4-6', '7-10', '11-16', '16+']

export default function MatchDayBrain() {
  const navigate = useNavigate()
  const [ageGroup, setAgeGroup] = useState(null)
  const [goal, setGoal] = useState(null)
  const [players, setPlayers] = useState(null)

  const ready = ageGroup && goal && players

  const handleGo = () => {
    if (!ready) return
    const params = new URLSearchParams({ age: ageGroup, goal, players })
    navigate(`/match-day/before?${params}`)
  }

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">🧠</div>
        <h2 className="text-2xl font-extrabold text-green-primary">
          Match Day Brain
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Session plan in 10 seconds
        </p>
      </div>

      {/* Age Group */}
      <div className="mb-6">
        <h3 className="font-bold text-charcoal mb-3">Age group</h3>
        <div className="grid grid-cols-4 gap-2">
          {ageGroups.map((ag) => (
            <button
              key={ag}
              onClick={() => setAgeGroup(ag)}
              className={`py-4 rounded-xl font-bold text-lg transition-all active:scale-[0.96] ${
                ageGroup === ag
                  ? 'bg-green-primary text-white shadow-lg'
                  : 'bg-light-grey text-charcoal hover:bg-gray-200'
              }`}
            >
              {ag}
            </button>
          ))}
        </div>
      </div>

      {/* Session Goal */}
      <div className="mb-6">
        <h3 className="font-bold text-charcoal mb-3">Session goal</h3>
        <div className="grid grid-cols-2 gap-2">
          {goals.map((g) => (
            <button
              key={g.id}
              onClick={() => setGoal(g.id)}
              className={`py-4 rounded-xl font-bold text-lg transition-all active:scale-[0.96] ${
                goal === g.id
                  ? 'bg-green-primary text-white shadow-lg'
                  : 'bg-light-grey text-charcoal hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{g.emoji}</span>
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Number of Players */}
      <div className="mb-8">
        <h3 className="font-bold text-charcoal mb-3">Number of players</h3>
        <div className="grid grid-cols-4 gap-2">
          {playerOptions.map((p) => (
            <button
              key={p}
              onClick={() => setPlayers(p)}
              className={`py-4 rounded-xl font-bold text-lg transition-all active:scale-[0.96] ${
                players === p
                  ? 'bg-green-primary text-white shadow-lg'
                  : 'bg-light-grey text-charcoal hover:bg-gray-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Go Button */}
      <button
        onClick={handleGo}
        disabled={!ready}
        className={`w-full py-5 rounded-2xl font-extrabold text-xl transition-all active:scale-[0.98] ${
          ready
            ? 'bg-orange-accent text-white shadow-xl hover:bg-orange-light'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Build My Session →
      </button>
    </div>
  )
}
