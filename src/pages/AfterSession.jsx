import { useNavigate } from 'react-router-dom'

const REFLECTION = 'Did they stay engaged the whole time?'
const REPEAT = 'Run the main game again next session.'

export default function AfterSession() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-3xl mb-1">🧘</div>
        <h2 className="text-2xl font-extrabold text-green-primary">
          After Session
        </h2>
        <p className="text-gray-500 text-sm mt-1">Take a moment to reflect</p>
      </div>

      {/* Reflection */}
      <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-5 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🪞</span>
          <h3 className="font-bold text-purple-600">Ask Yourself</h3>
        </div>
        <p className="text-charcoal leading-relaxed text-lg">
          {REFLECTION}
        </p>
      </div>

      {/* Repeat Next Session */}
      <div className="bg-green-50 border-l-4 border-green-primary rounded-xl p-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🔁</span>
          <h3 className="font-bold text-green-primary">Next Session</h3>
        </div>
        <p className="text-charcoal leading-relaxed text-lg">
          {REPEAT}
        </p>
      </div>

      {/* Actions */}
      <button
        onClick={() => navigate('/match-day')}
        className="w-full py-5 rounded-2xl font-extrabold text-xl text-white bg-green-primary hover:bg-green-light shadow-xl transition-all active:scale-[0.98] mb-3"
      >
        Plan Another Session
      </button>
      <button
        onClick={() => navigate('/')}
        className="w-full py-4 rounded-xl font-bold text-green-primary bg-light-grey hover:bg-gray-200 transition-all active:scale-[0.97]"
      >
        Back to Home
      </button>
    </div>
  )
}
