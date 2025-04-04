import React from 'react';
import { Scale, House, FileText, SearchCheck } from 'lucide-react';

interface CardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    buttonText?: string;
    buttonLink?: string;
    variant?: 'primary' | 'secondary' | 'feature';
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    icon,
    buttonText,
    buttonLink = '#',
    variant = 'primary'
}) => {
    const cardStyles = {
        primary: 'bg-white shadow-lg rounded-2xl p-6 border border-puple-900',
        secondary:
            'shadow-lg bg-white rounded-2xl p-6 border text-slate-900 ',
        feature:
            'bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center'
    };

    const titleStyles = {
        primary: 'text-xl font-semibold ',
        secondary: 'text-xl font-semibold text-slate-900',
        feature: 'text-lg font-medium text-slate-900 mt-4'
    };

    const descriptionStyles = {
        primary: 'text-slate-900 mt-2',
        secondary: 'text-slate-900 mt-2',
        feature: 'text-slate-900 text-sm mt-2'
    };

    const buttonStyles = {
        primary:
            'mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-md hover:opacity-90 transition-all duration-200 text-sm font-medium',
        secondary:
            'mt-4 px-4 py-2 bg-white text-slate-900  rounded-md hover:bg-purple-50 transition-all duration-200 text-sm font-medium',
        feature:
            'mt-4 text-slate-900  hover:text-purple-800 text-sm font-medium'
    };

    const iconContainer =
        variant === 'feature' ? (
            <div className='mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100'>
                {icon}
            </div>
        ) : (
            icon
        );

    return (
        <div className={cardStyles[variant]}>
            {variant === 'feature' ? iconContainer : null}
            <h2 className={titleStyles[variant]}>{title}</h2>
            <p className={descriptionStyles[variant]}>{description}</p>
            {buttonText && (
                <a href={buttonLink} className={buttonStyles[variant]}>
                    {buttonText}
                </a>
            )}
        </div>
    );
};

export default Card;
