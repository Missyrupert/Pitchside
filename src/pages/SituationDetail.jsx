import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import situations from '../data/situations.json'
import CategoryBadge from '../components/CategoryBadge'
import { addToRecentlyViewed } from '../components/RecentlyViewed'

export default function SituationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const situation = situations.find((s) => s.id === Number(id))

  useEffect(() => {
    if (situation) {
      addToRecentlyViewed({
        type: 'situation',
        id: situation.id,
        title: situation.title,
      })
    }
  }, [situation])

  if (!situation) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Situation not found.</p>
        <button
          onClick={() => navigate('/situations')}
          className="mt-4 text-green-primary font-semibold"
        >
          Back to Situations
        </button>
      </div>
    )
  }

  return (
    <div className="pb-8">
      <div className="mb-4">
        <CategoryBadge category={situation.category} />
      </div>
      <h2 className="text-2xl font-bold text-charcoal mb-2">
        {situation.title}
      </h2>
      <p className="text-gray-500 text-sm mb-6">{situation.summary}</p>

      <Section title="What's Happening" icon="📋">
        <p className="text-charcoal leading-relaxed">
          {situation.whatsHappening}
        </p>
      </Section>

      <div className="bg-green-50 border-l-4 border-green-primary rounded-r-xl p-5 mb-5">
        <h3 className="font-bold text-green-primary text-base mb-2 flex items-center gap-2">
          <span>💬</span> Immediate Response
        </h3>
        <p className="text-charcoal leading-relaxed italic">
          {situation.immediateResponse}
        </p>
      </div>

      <Section title="What to Do" icon="✅">
        <ol className="space-y-2">
          {situation.whatToDo.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="bg-green-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-charcoal leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Follow-Up" icon="📝">
        <p className="text-charcoal leading-relaxed">{situation.followUp}</p>
      </Section>

      <Section title="Safeguarding Checkpoint" icon="🛡️">
        <p className="text-charcoal leading-relaxed">
          {situation.safeguarding}
        </p>
      </Section>

      <Section title="Why This Matters" icon="💡">
        <p className="text-charcoal leading-relaxed">
          {situation.whyItMatters}
        </p>
      </Section>
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
