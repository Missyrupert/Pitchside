import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import drills from '../data/drills.json'
import CategoryBadge from '../components/CategoryBadge'
import { addToRecentlyViewed } from '../components/RecentlyViewed'

export default function DrillDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const drill = drills.find((d) => d.id === Number(id))

  useEffect(() => {
    if (drill) {
      addToRecentlyViewed({
        type: 'drill',
        id: drill.id,
        title: drill.name,
      })
    }
  }, [drill])

  if (!drill) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Drill not found.</p>
        <button
          onClick={() => navigate('/drills')}
          className="mt-4 text-green-primary font-semibold"
        >
          Back to Drills
        </button>
      </div>
    )
  }

  return (
    <div className="pb-8">
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <CategoryBadge category={drill.category} />
        <span className="text-sm text-gray-500">👥 {drill.playerCount} players</span>
        <span className="text-sm text-gray-500">•</span>
        <span className="text-sm text-gray-500">{drill.ageGroups.join(', ')}</span>
      </div>

      <h2 className="text-2xl font-bold text-charcoal mb-6">{drill.name}</h2>

      <Section title="Equipment Needed" icon="🎒">
        <div className="flex flex-wrap gap-2">
          {drill.equipment.map((item, i) => (
            <span
              key={i}
              className="bg-white border border-card-border rounded-lg px-3 py-1.5 text-sm text-charcoal"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Setup" icon="📐">
        <p className="text-charcoal leading-relaxed">{drill.setup}</p>
      </Section>

      <Section title="How to Run It" icon="▶️">
        <ol className="space-y-2">
          {drill.instructions.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="bg-orange-accent text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-charcoal leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Coaching Points" icon="🎯">
        <ul className="space-y-2">
          {drill.coachingPoints.map((point, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-green-primary font-bold shrink-0">•</span>
              <span className="text-charcoal leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <h3 className="font-bold text-green-primary text-base mb-2 flex items-center gap-2">
            <span>⚡</span> Immediate Benefits
          </h3>
          <p className="text-charcoal text-sm leading-relaxed">
            {drill.benefits.immediate}
          </p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <h3 className="font-bold text-orange-accent text-base mb-2 flex items-center gap-2">
            <span>🌱</span> Long-Term Benefits
          </h3>
          <p className="text-charcoal text-sm leading-relaxed">
            {drill.benefits.longTerm}
          </p>
        </div>
      </div>
    </div>
  )
}

function Section({ title, icon, children }) {
  return (
    <div className="bg-light-grey rounded-xl p-5 mb-4 border border-card-border">
      <h3 className="font-bold text-charcoal text-base mb-3 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      {children}
    </div>
  )
}
