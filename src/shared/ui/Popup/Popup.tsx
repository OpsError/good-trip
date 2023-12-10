import { FC, ReactNode } from 'react';
import './Popup.css';

interface PopupProps {
    avatarComponent: ReactNode,
    likeComponent: ReactNode,
    saveComponent: ReactNode,
    name: string,
    username: string,
    imageSrc: string,
    title: string,
    description: string,
}

const Popup: FC<PopupProps> = ({
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
        <div className='popup'>
            <div className='popup__container'>

                <div className='popup__header'>
                    <div className='popup__user-info'>
                        {avatarComponent}

                        <div className='popup__usernames'>
                            <p className='popup__name'>{name}</p>
                            <p className='popup__username'>{username}</p>
                        </div>
                        
                    </div>
                    <div className='popup__close' />
                </div>

                <div className='popup__image-container'>
                    <img alt="#" className='popup__image' src={imageSrc} />
                </div>

                <div className='popup__text'>
                    <h3 className='popup__title'>{title}</h3>
                    <p className='popup__description'>{description}</p>
                </div>

                <div className='popup__widgets'>
                    {likeComponent}
                    {saveComponent}
                </div>
            </div>
        </div>
    )
}

export default Popup;