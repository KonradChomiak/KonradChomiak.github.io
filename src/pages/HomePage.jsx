import { memo } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import SocialLinks from '../components/SocialLinks'
import { DIARY_ENTRIES } from '../data/constants'
import '../styles/home.css'

// Extracted DiaryEntry component for cleaner code
const DiaryEntry = memo(function DiaryEntry({ title, content, index }) {
    return (
        <motion.div
            className="diaryText"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <b>{title}</b> {content}
        </motion.div>
    )
})

function HomePage() {
    const { scrollY } = useScroll()
    const headerY = useTransform(scrollY, [0, 500], [0, 200])
    const picScale = useTransform(scrollY, [0, 500], [1, 1.1])

    return (
        <main className="container">
            <motion.header
                className="header"
                style={{ y: headerY }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1>Konrad Chomiak</h1>
            </motion.header>

            <motion.section
                className="section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <motion.div style={{ scale: picScale }}>
                    <motion.img
                        src="assets/mojezdj.jpg"
                        alt="zdjęcie przedstawiające autora strony"
                        className="autor__pic"
                        loading="eager"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    />
                </motion.div>

                <p className="sectionHeader">
                    Moja strona na której się uczę
                </p>
            </motion.section>

            <section className="section">
                <motion.h2
                    className="diary"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    Mój Pamiętnik
                </motion.h2>
                {DIARY_ENTRIES.map((entry, index) => (
                    <DiaryEntry
                        key={index}
                        index={index}
                        title={entry.title}
                        content={entry.content}
                    />
                ))}
            </section>

            <section className="section">
                <motion.h2
                    className="lorem-header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Trochę więcej o mnie
                </motion.h2>
                <motion.p
                    className="lorem"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Jestem pasjonatem technologii i sportów motorowych. Moja przygoda z programowaniem
                    zaczęła się od chęci stworzenia czegoś własnego, co łączyłoby estetykę z funkcjonalnością.
                    W moich projektach stawiam na nowoczesny design, płynne animacje i dbałość o detale.
                    Poza kodowaniem, z ogromnym zainteresowaniem śledzę każdy wyścig Formuły 1,
                    analizując strategie zespołów i osiągi kierowców. To właśnie ta precyzja i dążenie
                    do perfekcji w F1 inspirują mnie do ciągłego doskonalenia moich umiejętności technicznych.
                </motion.p>
            </section>

            <footer id="mylinks">
                <SocialLinks />
            </footer>
        </main>
    )
}

export default HomePage
