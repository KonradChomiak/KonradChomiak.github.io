import { useMemo, memo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getDriverById } from '../data/constants'
import '../styles/driver.css'

// Memoized external link component
const ExternalLink = memo(function ExternalLink({ href, children }) {
    return (
        <a
            href={href}
            className="links"
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
})

// Memoized facts list component
const FactsList = memo(function FactsList({ facts, currentInfo }) {
    if (facts.length === 0) return null

    return (
        <div className="list">
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
        </div>
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
                <Link to="/f1" className="nav">Powrót</Link>
            </main>
        )
    }

    const { displayName, subtitle, image, bio, facts, currentInfo, links } = driver

    return (
        <main className="driver-page">
            <header>
                <h1 className="header">{displayName}</h1>
            </header>

            <section className="driver-content">
                <h2 className="sectionheader">{subtitle}</h2>

                <img
                    src={image}
                    alt={`zdjęcie przedstawiające ${displayName}`}
                    className="driver-pic"
                    loading="eager"
                />

                <p className="driver-paragraph">{bio}</p>

                <FactsList facts={facts} currentInfo={currentInfo} />

                <p>
                    <Link to="/f1" className="nav">Powrót</Link>
                </p>
            </section>

            <footer>
                <section className="driver-links">
                    <p className="links-header">Przydatne linki</p>
                    <nav className="links-nav">
                        <ExternalLink href={links.wikipedia}>Wikipedia</ExternalLink>
                        <ExternalLink href={links.instagram}>Instagram</ExternalLink>
                        <ExternalLink href={links.facebook}>Facebook</ExternalLink>
                    </nav>
                </section>
            </footer>
        </main>
    )
}

export default DriverPage
