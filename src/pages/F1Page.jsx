import { memo, useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { TEAMS_DATA, DRIVERS_DATA, COLOR_OPTIONS } from '../data/constants'
import '../styles/f1.css'

// Memoized table row component
const TeamRow = memo(function TeamRow({ name, points, index }) {
    return (
        <motion.tr
            className="TableItem"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
        >
            <td>{name}</td>
            <td>{points}</td>
        </motion.tr>
    )
})

// Memoized driver card component
const DriverCard = memo(function DriverCard({ id, displayName, thumbnail, index }) {
    return (
        <motion.div
            className="drivers__items"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
        >
            <h3 className="picheader">{displayName}</h3>
            <Link to={`/driver/${id}`}>
                <motion.img
                    src={thumbnail}
                    alt={`zdjęcie przedstawiające ${displayName}`}
                    className="drivers__pic"
                    loading="lazy"
                />
            </Link>
        </motion.div>
    )
})

// Memoized color button component
const ColorButton = memo(function ColorButton({ name, color, onClick }) {
    return (
        <motion.button
            className={`color__button color__button--${name}`}
            onClick={onClick}
            style={{ backgroundColor: color }}
            aria-label={`Zmień kolor na ${name}`}
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
        />
    )
})

function F1Page() {
    const [headerColor, setHeaderColor] = useState('#fff')

    const { scrollY } = useScroll()
    const titleY = useTransform(scrollY, [0, 500], [0, 150])
    const imageY = useTransform(scrollY, [0, 500], [0, 100])

    return (
        <>
            <main id="up">
                <div className="header__div">
                    <header className="header">
                        <motion.img
                            src="assets/tlo2.jpg"
                            alt="tło"
                            className="header__pic"
                            loading="eager"
                            style={{ y: imageY }}
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        <div className="description__div">
                            <motion.h1
                                className="descriptionheader"
                                style={{ color: headerColor, y: titleY }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                Formula 1™ - Wszystko co musisz wiedzieć
                            </motion.h1>
                        </div>
                    </header>
                </div>
            </main>

            <section className="color">
                <motion.h2
                    className="color__header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Zmień kolor nagłówka
                </motion.h2>
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

            <motion.section
                className="description"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <p className="description__paragraph">
                    Bolidy Formuły 1 to fizyczna reprezentacja najnowszych osiągnięć w dziedzinie
                    motoryzacji. Już samo oglądanie wyścigów dostarcza odpowiedniej dozy emocji,
                    ale prawdziwi fani wiedzą, że najważniejsze rzeczy dzieją się poza torem.
                    Wynajdywanie innowacji, testy, zmagania inżynierów, aby dodać bolidowi zdolność
                    jazdy chociaż o 1 km/h szybciej.
                </p>
            </motion.section>

            <section>
                <motion.h3
                    className="section__header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Punktacja zespołów Sezon 2021
                </motion.h3>
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
                        {TEAMS_DATA.map((team, index) => (
                            <TeamRow
                                key={team.name}
                                index={index}
                                name={team.name}
                                points={team.points}
                            />
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="drivers">
                <motion.h2
                    className="drivers__header"
                    id="Formula"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Kierowcy F1
                </motion.h2>
                <div className="drivers__div">
                    {DRIVERS_DATA.map((driver, index) => (
                        <DriverCard
                            key={driver.id}
                            index={index}
                            id={driver.id}
                            displayName={driver.displayName}
                            thumbnail={driver.thumbnail}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default F1Page
