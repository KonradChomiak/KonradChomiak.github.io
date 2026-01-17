import { useMemo, memo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getDriverById } from '../data/constants'
import '../styles/driver.css'

// Memoized external link component
const ExternalLink = memo(function ExternalLink({ href, children, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <a
                href={href}
                className="links"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        </motion.div>
    )
})

// Memoized facts list component
const FactsList = memo(function FactsList({ facts, currentInfo }) {
    if (facts.length === 0) return null

    return (
        <motion.div
            className="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
        >
            <ul className="listul">
                {facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
                {currentInfo.length > 0 && (
                    <ol>
                        {currentInfo.map((info, i) => (
                            <li key={i}>{info}</li>
                        ))}
                    </ol>
                )}
            </ul>
        </motion.div>
    )
})

function DriverPage() {
    const { name } = useParams()

    // Memoize driver lookup to avoid recalculation on each render
    const driver = useMemo(() => getDriverById(name), [name])

    if (!driver) {
        return (
            <main className="driver-page">
                <h1>Kierowca nie znaleziony</h1>
            </main>
        )
    }

    const { displayName, subtitle, image, bio, facts, currentInfo, links } = driver

    return (
        <main className="driver-page">
            <header className="header">
                <motion.h1
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    {displayName}
                </motion.h1>
            </header>

            <section className="driver-content">
                <motion.h2
                    className="sectionheader"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {subtitle}
                </motion.h2>

                <motion.img
                    src={image}
                    alt={`zdjęcie przedstawiające ${displayName}`}
                    className="driver-pic"
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                />

                <motion.p
                    className="driver-paragraph"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {bio}
                </motion.p>

                <FactsList facts={facts} currentInfo={currentInfo} />
            </section>

            <footer>
                <section className="driver-links">
                    <motion.p
                        className="links-header"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Przydatne linki
                    </motion.p>
                    <nav className="links-nav">
                        <ExternalLink index={0} href={driver.links.wikipedia}>Wikipedia</ExternalLink>
                        <ExternalLink index={1} href={driver.links.instagram}>Instagram</ExternalLink>
                        <ExternalLink index={2} href={driver.links.facebook}>Facebook</ExternalLink>
                    </nav>
                </section>
            </footer>
        </main>
    )
}

export default DriverPage
