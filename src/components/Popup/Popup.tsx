import React, { FC } from "react";
import './Popup.css';

interface PopupProps {
    open: boolean,
    openPopup: () => void,
    children: React.ReactNode
}

const Popup: FC<PopupProps> = ({open, openPopup, children}) => {
    return(
        <section className={`popup ${open ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button onClick={openPopup} className="popup__close" />
                {children}
            </div>
        </section>
    );
}

export default Popup;