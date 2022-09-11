import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGamepad } from '@fortawesome/free-solid-svg-icons'

function SocialIcon(props : any) {
    const {link, icon, label} = props;
    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
        {/* // <i className={icon} aria-hidden="true"/> */}
            < FontAwesomeIcon icon={icon} />
        </a>
    );
}

export default SocialIcon;