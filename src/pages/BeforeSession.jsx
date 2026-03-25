import { useMemo } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { buildSession } from '../data/matchDayBrain'

export default function BeforeSession() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const age = searchParams.get('age') || 'U8'
  const goal = searchParams.get('goal') || 'fun'
  const players = searchParams.get('players') || '7-10'

  const plan = useMemo(
    () => buildSession(age, goal, players),
    [age, goal, players]
  )

  const handleNext = () => {
    navigate(`/match-day/during?goal=${goal}`)
  }

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-3xl mb-1">📋</div>
        <h2 className="text-2xl font-extrabold text-green-primary">
          Your Session Plan
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          {age} · {goal} · {players} players
        </p>
      </div>

      {/* Warm-Up */}
      <div className="bg-green-50 border-l-4 border-green-primary rounded-xl p-5 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🔥</span>
          <h3 className="font-bold text-green-primary">Warm-Up</h3>
        </div>
        <p className="text-charcoal font-semibold">{plan.warmup.name}</p>
        <p className="text-charcoal leading-relaxed mt-1">{plan.warmup.desc}</p>
      </div>

      {/* Main Game */}
      <div className="bg-orange-50 border-l-4 border-orange-accent rounded-xl p-5 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">⚽</span>
          <h3 className="font-bold text-orange-accent">Main Game</h3>
        </div>
        <p className="text-charcoal font-semibold">{plan.main.name}</p>
        <p className="text-charcoal leading-relaxed mt-1">{plan.main.desc}</p>
      </div>

      {/* Condition */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-5 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">👀</span>
          <h3 className="font-bold text-blue-600">Focus On</h3>
        </div>
        <p className="text-charcoal leading-relaxed">{plan.condition}</p>
      </div>

      {plan.adjustment ? (
        <div className="bg-gray-50 border-l-4 border-gray-400 rounded-xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">📐</span>
            <h3 className="font-bold text-gray-700">Adjustment for your group</h3>
          </div>
          <p className="text-charcoal leading-relaxed">{plan.adjustment}</p>
        </div>
      ) : null}

      {/* Actions */}
      <div className="mt-6 mb-4">
        <button
          onClick={handleNext}
          className="w-full py-4 rounded-xl font-bold text-white bg-orange-accent hover:bg-orange-light shadow-lg transition-all active:scale-[0.97]"
        >
          I'm Ready →
        </button>
      </div>
    </div>
  )
}
