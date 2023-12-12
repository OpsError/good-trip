import { FC } from 'react';
import './FormAuth.css';

interface FormAuthProps {
    highClass: string,
    title: string,
    countInputs: number,
    children: React.ReactNode
}

const FormAuth: FC<FormAuthProps> = ({
    highClass,
    title,
    children
}) => {
    return(
        <div className={`${highClass} formAuth`}>
            <h2 className='formAuth__title'>{title}</h2>
            { children }
        </div>
    )
}

export default FormAuth;