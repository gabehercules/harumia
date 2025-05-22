'use client';

import Image from 'next/image';

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export const Logo = ({ className = '', width = 200, height = 200 }: LogoProps) => {
    return (
        <Image
            src="/harumia-logo.png"
            alt="Harumia Confeitaria"
            width={width}
            height={height}
            className={className}
            priority
        />
    );
}; 