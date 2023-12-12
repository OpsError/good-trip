import './Header.css';
import { FC } from 'react';

interface HeaderProps {
    isLogined: boolean,
    username: string,
    cityName: string,
}

const Header: FC<HeaderProps> = ({
    isLogined,
    username,
    cityName
}) => {
    return(
        <header className='header'>
            <h1 className='header__logo'>Good Trip</h1>
            <div className='header__widgets'>
                <p className='header__location'>{cityName}</p>
                {
                    isLogined?
                    <div className='header__user'>
                        <p className='header__username'>{username}</p>
                        <p className='header__signout'>Выход</p>
                    </div>
                    :
                    <p className='header__auth'>Вход</p>
                }
            </div>
            <button className='header__sidebar' />
        </header>
    )
}

export default Header;