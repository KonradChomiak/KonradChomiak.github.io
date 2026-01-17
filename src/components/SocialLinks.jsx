import { memo } from 'react'
import { SOCIAL_LINKS } from '../data/constants'
import '../styles/social.css'

// Memoized component - only re-renders if props change (none in this case)
const SocialLinks = memo(function SocialLinks() {
    return (
        <div className="buttons" id="mylinks">
            {SOCIAL_LINKS.map(({ name, url, icon, className }) => (
                <div key={name} className={className}>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Link do ${name}`}
                    >
                        <img
                            src={icon}
                            className={`${name}pic`}
                            alt={name}
                            loading="lazy"
                        />
                    </a>
                </div>
            ))}
        </div>
    )
})

export default SocialLinks
