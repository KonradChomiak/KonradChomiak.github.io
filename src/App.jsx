import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

// Lazy load pages for better initial bundle size
const HomePage = lazy(() => import('./pages/HomePage'))
const F1Page = lazy(() => import('./pages/F1Page'))
const DriverPage = lazy(() => import('./pages/DriverPage'))

// Loading fallback component
const PageLoader = () => (
    <div className="page-loader">
        <p>Ładowanie...</p>
    </div>
)

function App() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/f1" element={<F1Page />} />
                <Route path="/driver/:name" element={<DriverPage />} />
            </Routes>
        </Suspense>
    )
}

export default App
