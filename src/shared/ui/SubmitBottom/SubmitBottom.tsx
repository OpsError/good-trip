import { FC } from 'react';
import './SubmitBottom.css';

interface SubmitBottomProps {
    highClass: string,
    textButton: string
}

const SubmitBottom: FC<SubmitBottomProps> = ({
    highClass,
    textButton
}) => {
    return(
        <button type='submit' className={`${highClass} button-submit`}>{textButton}</button>
    )
}

export default SubmitBottom;