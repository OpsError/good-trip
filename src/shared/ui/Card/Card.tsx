import { FC, ReactNode } from 'react';
import './Card.css';

interface CardProps {
  avatarComponent: ReactNode;
  likeComponent: ReactNode;
  saveComponent: ReactNode;
  name: string;
  username: string;
  imageSrc: string;
  likesSummary: number;
}

const Card: FC<CardProps> = ({
  avatarComponent,
  likeComponent,
  saveComponent,
  name,
  username,
  imageSrc,
  likesSummary,
}) => {
  return (
    <div className="card">
      <div className="card__info">
        {avatarComponent}
        <div className="card__usernames">
          <p className="card__name">{name}</p>
          <p className="card__username">{`@${username}`}</p>
        </div>
      </div>
      <div className="card__container">
        <img className="card__image" src={imageSrc} alt="#" />
        <h2 className='card__title'>Как же хорошо жить</h2>
        <div className="card__widgets">
          <div className="card__likes">
            {likeComponent}
            <p className="card__likes-summary">{likesSummary}</p>
          </div>
          {saveComponent}
        </div>
      </div>
    </div>
  );
};

export default Card;