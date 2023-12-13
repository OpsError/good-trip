import { FC, ReactNode } from "react";
import './Popup.css';

interface PopupProps {
    children: ReactNode
}

const Popup: FC<PopupProps> = ({ children }) => {
    return(
        <section className="popup">
            <div className="popup__container">
                {children}
            </div>
        </section>
    );
}

export default Popup;