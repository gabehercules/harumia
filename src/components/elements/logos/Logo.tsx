'use client';

import Image from 'next/image';

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export const Logo = ({ className = '', width = 80, height = 80 }: LogoProps) => {
    return (
        <Image
            src="/logo-brown-alt.png"
            alt="Harumia Confeitaria"
            width={width}
            height={height}
            className={className}
            priority
        />
    );
}; 