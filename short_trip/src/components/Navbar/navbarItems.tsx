import React from 'react';

interface navbarItemProps {
    label: string;
    isActive?: boolean;
}

const NavbarItems: React.FC<navbarItemProps> = ({ label, isActive = false }) => {
    return (
        <div
            className={`grow shrink gap-2 self-stretch px-2 py-4 min-h-[56px] rounded-[58px] ${isActive ? 'bg-stone-900 bg-opacity-20' : ''}`}>
            {label}
        </div>
    );
};

export default NavbarItems;