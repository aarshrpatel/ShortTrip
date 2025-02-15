import React from 'react'

const Logo: React.FC = () => {
    return (
        <img
            loading="lazy"
            src="../../assets/logo.png"
            className={'h-20 ml-10 mt-3' }
            alt="logo" />
    );
};

export default Logo;