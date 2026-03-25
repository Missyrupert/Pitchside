import { useMemo, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

const DURING_COPY = {
  chaos: 'Stop. Reset shape. Start again.',
  boredom: 'Add a scoring rule. First to 3 wins.',
  dominating: 'Limit to 2 touches. Make it harder.',
}

export default function DuringSession() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const goal = searchParams.get('goal') || 'fun'

  const [expanded, setExpanded] = useState(null)

  const cards = useMemo(
    () => [
      {
        id: 'chaos',
        emoji: '🌪️',
        label: 'If chaos...',
        bg: 'bg-red-50',
        border: 'border-red-400',
        textColor: 'text-red-600',
        content: DURING_COPY.chaos,
      },
      {
        id: 'boredom',
        emoji: '😴',
        label: 'If bored...',
        bg: 'bg-amber-50',
        border: 'border-amber-400',
        textColor: 'text-amber-600',
        content: DURING_COPY.boredom,
      },
      {
        id: 'dominating',
        emoji: '🏆',
        label: 'If dominating...',
        bg: 'bg-blue-50',
        border: 'border-blue-400',
        textColor: 'text-blue-600',
        content: DURING_COPY.dominating,
      },
    ],
    []
  )

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-3xl mb-1">⚡</div>
        <h2 className="text-2xl font-extrabold text-green-primary">
          Sideline Help
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Tap a situation for a quick fix
        </p>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() =>
              setExpanded(expanded === card.id ? null : card.id)
            }
            className={`text-left rounded-xl border-l-4 ${card.border} ${card.bg} p-5 transition-all active:scale-[0.98]`}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{card.emoji}</span>
              <span className={`font-bold text-lg ${card.textColor}`}>
                {card.label}
              </span>
            </div>
            {expanded === card.id && (
              <p className="mt-3 text-charcoal leading-relaxed">
                {card.content}
              </p>
            )}
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate(`/match-day/after?goal=${goal}`)}
        className="w-full py-5 rounded-2xl font-extrabold text-xl text-white bg-orange-accent hover:bg-orange-light shadow-xl transition-all active:scale-[0.98]"
      >
        Session Over →
      </button>
    </div>
  )
}
