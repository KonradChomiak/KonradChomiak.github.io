import { memo } from 'react'
import { Link } from 'react-router-dom'
import SocialLinks from '../components/SocialLinks'
import { DIARY_ENTRIES } from '../data/constants'
import '../styles/home.css'

// Extracted DiaryEntry component for cleaner code
const DiaryEntry = memo(function DiaryEntry({ title, content }) {
    return (
        <p className="diaryText">
            <b>{title}</b> {content}
        </p>
    )
})

function HomePage() {
    return (
        <main>
            <header className="header">
                <h1>Konrad Chomiak</h1>
            </header>

            <section className="section">
                <img
                    src="assets/mojezdj.jpg"
                    alt="zdjęcie przedstawiające autora strony"
                    className="autor__pic"
                    loading="eager"
                />

                <p className="sectionHeader">
                    Moja strona na której się uczę
                </p>

                <nav className="navigation">
                    <Link to="/f1" className="link">
                        Strona o F1
                    </Link>
                    <a href="#mylinks" className="link">
                        Moje socialmedia
                    </a>
                </nav>
            </section>

            <section>
                <h2 className="diary">Pamiętnik</h2>

                {DIARY_ENTRIES.map((entry, index) => (
                    <DiaryEntry
                        key={index}
                        title={entry.title}
                        content={entry.content}
                    />
                ))}

                <h3 className="lorem-header">Lorem ipsum</h3>

                <p className="lorem">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quo dolores ex!
                    Accusamus aliquam eveniet porro eaque ipsam ea, voluptates officia dolorum, odio recusandae,
                    nostrum ut minima possimus quaerat maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum, quae velit et suscipit totam explicabo autem optio iste distinctio quas! Facilis quis
                    tenetur mollitia modi expedita commodi odit molestiae similique. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quaerat iste amet molestias, cum incidunt minus voluptates tenetur at mollitia.
                    Doloremque architecto velit similique id rem, possimus culpa voluptate maiores eos! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Iure voluptate, commodi recusandae rem nemo quasi, delectus harum,
                    fuga similique nostrum sunt voluptatum! Voluptates molestias et iure temporibus optio ipsa recusandae!
                </p>
            </section>

            <footer>
                <SocialLinks />
            </footer>
        </main>
    )
}

export default HomePage
