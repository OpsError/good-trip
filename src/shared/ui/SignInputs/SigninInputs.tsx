import { FC, ReactNode } from 'react';
import './SignInputs.css';

interface SigninInputsProps {
    buttonSubmit: ReactNode
}

const SigninInputs: FC<SigninInputsProps> = ({
    buttonSubmit
}) => {
    // класс ошибки для инпута formAuth__input_error
    return(
        <form className='formAuth__form'>
            <label className='formAuth__label'>Эл. адрес</label>
            <input placeholder='email' type='email' className='formAuth__input'></input>
            <p className='formAuth__error'>Неверный логин</p>
            <label className='formAuth__label'>Пароль</label>
            <input placeholder='пароль' type='password' className='formAuth__input'></input>
            <p className='formAuth__error'>Неверный пароль</p>
            { buttonSubmit }
        </form>
    )
}

export default SigninInputs;