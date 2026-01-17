import { memo } from 'react'
import { motion } from 'framer-motion'
import { SOCIAL_LINKS } from '../data/constants'
import '../styles/social.css'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 }
}

// Memoized component - only re-renders if props change (none in this case)
const SocialLinks = memo(function SocialLinks() {
    return (
        <motion.div
            className="buttons"
            id="mylinks"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            {SOCIAL_LINKS.map(({ id, name, url, icon, className }) => (
                <motion.div
                    key={id || name}
                    className={className}
                    variants={item}
                >
                    <motion.a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Link do ${name}`}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img
                            src={icon}
                            className={`${name}pic`}
                            alt={name}
                            loading="lazy"
                        />
                    </motion.a>
                </motion.div>
            ))}
        </motion.div>
    )
})

export default SocialLinks
