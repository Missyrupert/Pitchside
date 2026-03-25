import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-green-primary shadow-md">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center">
          {!isHome && (
            <button
              onClick={() => navigate(-1)}
              className="mr-3 text-white hover:text-orange-accent transition-colors"
              aria-label="Go back"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <h1
            className="text-white font-extrabold text-xl tracking-tight cursor-pointer"
            onClick={() => navigate('/')}
          >
            Pitchside
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 pb-20">
        <Outlet />
      </main>
    </div>
  )
}
