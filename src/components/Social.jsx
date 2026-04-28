import React from 'react';

import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebook } from 'react-icons/fa'


const socialItems = [
    {
        icon: <FaGithub />,
        path: "https://github.com/sazedul-islamm"
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/sazedul-islamm"
    },
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/sazed9126"
    },
    {
        icon: <FaTwitter />,
        path: "https://x.com/SazedCreations"
    },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {
                socialItems.map((social, index) => {
                    return (
                        <a key={index} href={social.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
                            {social.icon}
                        </a>
                    )
                })
            }
        </div>
    );
};

export default Social;