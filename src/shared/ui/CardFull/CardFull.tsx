import { FC, ReactNode } from 'react';
import './CardFull.css';

interface CardFullProps {
    highClass: string,
    avatarComponent: ReactNode,
    likeComponent: ReactNode,
    saveComponent: ReactNode,
    name: string,
    username: string,
    imageSrc: string,
    title: string,
    description: string,
}

const CardFull: FC<CardFullProps> = ({
    highClass,
    avatarComponent,
    likeComponent,
    saveComponent,
    name,
    username,
    imageSrc,
    title,
    description
}) => {
    return(
        <div className={`${highClass}__content cardFull`}>
            <div className='cardFull__header'>
                <div className='cardFull__user-info'>
                    {avatarComponent}
                    <div className='cardFull__usernames'>
                        <p className='cardFull__name'>{name}</p>
                        <p className='cardFull__username'>{username}</p>
                    </div>
                        
                </div>
                <div className='cardFull__close' />
            </div>

            <div className='cardFull__image-container'>
                <img alt="#" className='cardFull__image' src={imageSrc} />
            </div>

            <div className='cardFull__text'>
                <h3 className='cardFull__title'>{title}</h3>
                <p className='cardFull__description'>{description}</p>
            </div>

            <div className='cardFull__widgets'>
                {likeComponent}
                {saveComponent}
            </div>
        </div>
    )
}

export default CardFull;