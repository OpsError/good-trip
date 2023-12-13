import { FC, ReactNode } from 'react';
import './SignInputs.css';

interface SignupInputsProps {
    buttonSubmit: ReactNode
}

const SignupInputs: FC<SignupInputsProps> = ({
    buttonSubmit
}) => {
    // класс ошибки для инпута formAuth__input_error
    return(
        <form className='formAuth__form'>
            <label className='formAuth__label'>Имя пользователя</label>
            <input placeholder='Имя пользователя' type='text' className='formAuth__input'></input>
            <p className='formAuth__error'>Такое имя уже существует</p>
            <label className='formAuth__label'>Эл. адрес</label>
            <input placeholder='Email' type='email' className='formAuth__input'></input>
            <p className='formAuth__error'>Неверный логин</p>
            <label className='formAuth__label'>Пароль</label>
            <input placeholder='Пароль' type='password' className='formAuth__input'></input>
            <p className='formAuth__error'>Неверный пароль</p>
            { buttonSubmit }
        </form>
    )
}

export default SignupInputs;