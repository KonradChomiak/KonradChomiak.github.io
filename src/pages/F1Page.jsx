import { memo, useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { TEAMS_DATA, DRIVERS_DATA, COLOR_OPTIONS } from '../data/constants'
import '../styles/f1.css'

// Memoized table row component
const TeamRow = memo(function TeamRow({ name, points }) {
    return (
        <tr className="TableItem">
            <td>{name}</td>
            <td>{points}</td>
        </tr>
    )
})

// Memoized driver card component
const DriverCard = memo(function DriverCard({ id, displayName, thumbnail }) {
    return (
        <div className="drivers__items">
            <h3 className="picheader">{displayName}</h3>
            <Link to={`/driver/${id}`}>
                <img
                    src={thumbnail}
                    alt={`zdjęcie przedstawiające ${displayName}`}
                    className="drivers__pic"
                    loading="lazy"
                />
            </Link>
        </div>
    )
})

// Memoized color button component
const ColorButton = memo(function ColorButton({ name, color, onClick }) {
    return (
        <button
            className={`color__button color__button--${name}`}
            onClick={onClick}
            style={{ backgroundColor: color }}
            aria-label={`Zmień kolor na ${name}`}
        />
    )
})

function F1Page() {
    const [headerColor, setHeaderColor] = useState('#fff')
    const [navVisible, setNavVisible] = useState(false)

    // Memoized toggle function - won't be recreated on each render
    const toggleNav = useCallback(() => {
        setNavVisible(prev => !prev)
    }, [])

    // Memoized navigation classes
    const navClasses = useMemo(() =>
        `navigation ${navVisible ? 'navigation__visible' : ''}`,
        [navVisible]
    )

    return (
        <>
            <button
                className="navigation__button"
                onClick={toggleNav}
                aria-label="Toggle navigation"
                aria-expanded={navVisible}
            >
                ≡
            </button>

            <nav className={navClasses} role="navigation">
                <div className="navigation__div">
                    <Link to="/" className="link2">Powrót</Link>
                    <a href="#table" className="link2">Punktacja</a>
                    <a href="#Formula" className="link2">Kierowcy</a>
                </div>
            </nav>

            <main id="up">
                <div className="header__div">
                    <header className="header">
                        <img
                            src="assets/tlo2.jpg"
                            alt="tło"
                            className="header__pic"
                            loading="eager"
                        />
                        <div className="description__div">
                            <h1
                                className="descriptionheader"
                                style={{ color: headerColor }}
                            >
                                Formula 1™ - Wszystko co musisz wiedzieć
                            </h1>
                        </div>
                    </header>
                </div>
            </main>

            <section className="color">
                <h2 className="color__header">Zmień kolor nagłówka</h2>
                <div className="color__div">
                    {COLOR_OPTIONS.map(({ name, color }) => (
                        <ColorButton
                            key={name}
                            name={name}
                            color={color}
                            onClick={() => setHeaderColor(color)}
                        />
                    ))}
                </div>
            </section>

            <section className="description">
                <p className="description__paragraph">
                    Bolidy Formuły 1 to fizyczna reprezentacja najnowszych osiągnięć w dziedzinie
                    motoryzacji. Już samo oglądanie wyścigów dostarcza odpowiedniej dozy emocji,
                    ale prawdziwi fani wiedzą, że najważniejsze rzeczy dzieją się poza torem.
                    Wynajdywanie innowacji, testy, zmagania inżynierów, aby dodać bolidowi zdolność
                    jazdy chociaż o 1 km/h szybciej.
                </p>
            </section>

            <section>
                <h3 className="section__header">Punktacja zespołów Sezon 2021</h3>
            </section>

            <section className="tableSection" id="table">
                <table className="table">
                    <thead>
                        <tr className="Tablepoint">
                            <th>Zespół</th>
                            <th>Punktacja</th>
                        </tr>
                    </thead>
                    <tbody className="bodytable">
                        {TEAMS_DATA.map(team => (
                            <TeamRow
                                key={team.name}
                                name={team.name}
                                points={team.points}
                            />
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="drivers">
                <h2 className="drivers__header" id="Formula">Kierowcy F1</h2>
                <div className="drivers__div">
                    {DRIVERS_DATA.map(driver => (
                        <DriverCard
                            key={driver.id}
                            id={driver.id}
                            displayName={driver.displayName}
                            thumbnail={driver.thumbnail}
                        />
                    ))}
                </div>
            </section>

            <section className="navigation__up">
                <a href="#up" className="up" aria-label="Wróć na górę strony">
                    Na górę
                </a>
            </section>
        </>
    )
}

export default F1Page
