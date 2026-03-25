import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import drills from '../data/drills.json'
import CategoryBadge from '../components/CategoryBadge'

const PLAYER_COUNTS = ['Any', '6-8', '8-12', '12-16']
const FOCUS_AREAS = ['All', 'Warm-up', 'Defending', 'Attacking', 'Possession', 'Goalkeeping', 'Fun']
const AGE_GROUPS = ['All', 'U7-U8', 'U9-U10', 'U11+']

function parsePlayerRange(rangeStr) {
  if (rangeStr === 'Any') return null
  const [min, max] = rangeStr.split('-').map(Number)
  return { min, max }
}

function drillMatchesPlayerCount(drill, filterRange) {
  if (!filterRange) return true
  if (drill.playerCount === 'Any') return true
  const parts = drill.playerCount.split('-').map(Number)
  const drillMin = parts[0]
  const drillMax = parts[1] || parts[0]
  return drillMax >= filterRange.min && drillMin <= filterRange.max
}

export default function Drills() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const [playerCount, setPlayerCount] = useState(searchParams.get('players') || 'Any')
  const [focusArea, setFocusArea] = useState(searchParams.get('focus') || 'All')
  const [ageGroup, setAgeGroup] = useState(searchParams.get('age') || 'All')

  useEffect(() => {
    const params = {}
    if (playerCount !== 'Any') params.players = playerCount
    if (focusArea !== 'All') params.focus = focusArea
    if (ageGroup !== 'All') params.age = ageGroup
    setSearchParams(params, { replace: true })
  }, [playerCount, focusArea, ageGroup, setSearchParams])

  const filtered = drills.filter((drill) => {
    if (focusArea !== 'All' && drill.category !== focusArea) return false
    if (ageGroup !== 'All' && !drill.ageGroups.includes(ageGroup)) return false
    if (!drillMatchesPlayerCount(drill, parsePlayerRange(playerCount))) return false
    return true
  })

  return (
    <div>
      <h2 className="text-xl font-bold text-charcoal mb-4">Drills</h2>

      <div className="grid grid-cols-3 gap-2 mb-6">
        <FilterSelect
          label="Players"
          value={playerCount}
          onChange={setPlayerCount}
          options={PLAYER_COUNTS}
        />
        <FilterSelect
          label="Focus"
          value={focusArea}
          onChange={setFocusArea}
          options={FOCUS_AREAS}
        />
        <FilterSelect
          label="Age"
          value={ageGroup}
          onChange={setAgeGroup}
          options={AGE_GROUPS}
        />
      </div>

      <p className="text-gray-500 text-sm mb-4">
        {filtered.length} drill{filtered.length !== 1 ? 's' : ''} found
      </p>

      <div className="space-y-3">
        {filtered.map((drill) => (
          <button
            key={drill.id}
            onClick={() => navigate(`/drills/${drill.id}`)}
            className="w-full text-left bg-light-grey rounded-xl p-4 hover:shadow-md transition-shadow active:scale-[0.99] border border-card-border"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <CategoryBadge category={drill.category} small />
                  <span className="text-xs text-gray-500">
                    👥 {drill.playerCount}
                  </span>
                </div>
                <h3 className="font-semibold text-charcoal text-base">
                  {drill.name}
                </h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg mb-2">No drills match your filters</p>
            <button
              onClick={() => {
                setPlayerCount('Any')
                setFocusArea('All')
                setAgeGroup('All')
              }}
              className="text-orange-accent font-semibold text-sm"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-card-border rounded-lg px-3 py-2.5 text-sm text-charcoal font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-primary"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
