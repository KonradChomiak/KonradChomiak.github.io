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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
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
        <main>
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

            <section>
                <motion.h2
                    className="diary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Pamiętnik
                </motion.h2>

                {DIARY_ENTRIES.map((entry, index) => (
                    <DiaryEntry
                        key={index}
                        index={index}
                        title={entry.title}
                        content={entry.content}
                    />
                ))}

                <motion.h3
                    className="lorem-header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Lorem ipsum
                </motion.h3>

                <motion.p
                    className="lorem"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quo dolores ex!
                    Accusamus aliquam eveniet porro eaque ipsam ea, voluptates officia dolorum, odio recusandae,
                    nostrum ut minima possimus quaerat maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum, quae velit et suscipit totam explicabo autem optio iste distinctio quas! Facilis quis
                    tenetur mollitia modi expedita commodi odit molestiae similique. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quaerat iste amet molestias, cum incidunt minus voluptates tenetur at mollitia.
                    Doloremque architecto velit similique id rem, possimus culpa voluptate maiores eos! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Iure voluptate, commodi recusandae rem nemo quasi, delectus harum,
                    fuga similique nostrum sunt voluptatum! Voluptates molestias et iure temporibus optio ipsa recusandae!
                </motion.p>
            </section>

            <footer id="mylinks">
                <SocialLinks />
            </footer>
        </main>
    )
}

export default HomePage
