const colorMap = {
  Parents: 'bg-orange-accent text-white',
  Kids: 'bg-green-primary text-white',
  'Warm-up': 'bg-amber-500 text-white',
  Defending: 'bg-red-600 text-white',
  Attacking: 'bg-blue-600 text-white',
  Possession: 'bg-purple-600 text-white',
  Goalkeeping: 'bg-teal-600 text-white',
  Fun: 'bg-pink-500 text-white',
  Situation: 'bg-orange-accent text-white',
  Drill: 'bg-green-primary text-white',
}

export default function CategoryBadge({ category, small }) {
  const colors = colorMap[category] || 'bg-gray-500 text-white'
  const size = small ? 'text-xs px-2 py-0.5' : 'text-xs px-2.5 py-1'

  return (
    <span className={`inline-block rounded-full font-semibold ${colors} ${size}`}>
      {category}
    </span>
  )
}
