import React, { FC } from "react";
import './PopupAuto.css';
import Popup from "../Popup/Popup";

interface PopupAutoProps {
    open: boolean,
    openPopup: () => void,
    onClose: (evt: any) => void
}

const PopupAuto: FC<PopupAutoProps> = ({open, openPopup, onClose}) => {
    return(
        <Popup open={open} openPopup={openPopup} onClose={onClose} nameClass="popup_auto">
            <div className="popup-auto__container">

            </div>
        </Popup>
    );
}

export default PopupAuto;