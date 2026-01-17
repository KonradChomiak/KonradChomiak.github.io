import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Header from './components/Header'

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
    const location = useLocation()

    return (
        <Suspense fallback={<PageLoader />}>
            <ScrollProgress />
            <BackToTop />
            <Header />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <HomePage />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/f1"
                        element={
                            <PageTransition>
                                <F1Page />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/driver/:name"
                        element={
                            <PageTransition>
                                <DriverPage />
                            </PageTransition>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </Suspense>
    )
}

export default App
