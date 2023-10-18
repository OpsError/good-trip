import React, { FC } from "react";
import './Popup.css';

interface PopupProps {
    open: boolean,
    openPopup: () => void,
    children: React.ReactNode,
    nameClass: string,
    onClose: (evt: any) => void
}

const Popup: FC<PopupProps> = ({open, openPopup, children, nameClass, onClose}) => {
    return(
        <section className={`popup ${open ? 'popup_opened' : ''}`} onMouseDown={evt => onClose(evt)}>
            <div className={`popup__container ${nameClass}`}>
                <button onClick={openPopup} className="popup__close" />
                {children}
            </div>
        </section>
    );
}

export default Popup;