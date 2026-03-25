import { useNavigate } from 'react-router-dom'
import situations from '../data/situations.json'
import CategoryBadge from '../components/CategoryBadge'

export default function Situations() {
  const navigate = useNavigate()

  return (
    <div>
      <h2 className="text-xl font-bold text-charcoal mb-4">Situations</h2>
      <p className="text-gray-500 text-sm mb-6">
        Scripts and strategies for tricky coaching moments
      </p>

      <div className="space-y-3">
        {situations.map((s) => (
          <button
            key={s.id}
            onClick={() => navigate(`/situations/${s.id}`)}
            className="w-full text-left bg-light-grey rounded-xl p-4 hover:shadow-md transition-shadow active:scale-[0.99] border border-card-border"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <div className="mb-2">
                  <CategoryBadge category={s.category} small />
                </div>
                <h3 className="font-semibold text-charcoal text-base mb-1">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-snug">
                  {s.summary}
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
