import React, {FC} from 'react';
import './Navbar.css';
import { ICity } from '../../types/types';
import geoIcon from '../../images/geo-icon.svg';

interface NavbarProps {
    open: boolean,
    openGeo: () => void,
    city: ICity
}

const Navbar: FC<NavbarProps> = ({open, openGeo, city}) => {
    return(
        <section className={`header__navbar navbar ${open? 'navbar_active' : ''}`}>
            <div className='navbar__container'>
                <ul className='navbar__elements'>
                    <li className='navbar__element' onClick={openGeo}>
                        <img src={geoIcon} alt="Иконка геолокации" className="navbar__geo-icon" />
                        {city.name}
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Navbar;