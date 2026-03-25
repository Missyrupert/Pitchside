import { useNavigate } from 'react-router-dom'
import CategoryBadge from './CategoryBadge'

export function getRecentlyViewed() {
  try {
    return JSON.parse(localStorage.getItem('pitchside-recent') || '[]')
  } catch {
    return []
  }
}

export function addToRecentlyViewed(item) {
  const recent = getRecentlyViewed().filter(
    (r) => !(r.type === item.type && r.id === item.id)
  )
  recent.unshift({ ...item, timestamp: Date.now() })
  localStorage.setItem('pitchside-recent', JSON.stringify(recent.slice(0, 3)))
}

export function clearRecentlyViewed() {
  localStorage.removeItem('pitchside-recent')
}

export default function RecentlyViewed({ items, onClear }) {
  const navigate = useNavigate()

  if (!items.length) return null

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-charcoal">Recently Viewed</h2>
        <button
          onClick={onClear}
          className="text-sm text-gray-500 hover:text-orange-accent transition-colors"
        >
          Clear
        </button>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={`${item.type}-${item.id}`}
            onClick={() =>
              navigate(
                item.type === 'situation'
                  ? `/situations/${item.id}`
                  : `/drills/${item.id}`
              )
            }
            className="w-full text-left bg-light-grey rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow active:scale-[0.99]"
          >
            <CategoryBadge
              category={item.type === 'situation' ? 'Situation' : 'Drill'}
              small
            />
            <span className="font-medium text-charcoal truncate">
              {item.title}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 ml-auto shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>
    </section>
  )
}
