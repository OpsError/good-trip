import React, { FC } from 'react';
import './AuthForm.css';

const AuthForm: FC = () => {
    return(
        <section className='auth'>
            <div className='auth__container'>
                <h2 className='auth__header'>Вход</h2>
                <form className='auth__form'>
                    <div className='auth__inputs'>
                        <input className='auth__input' placeholder='e-mail' />
                        <input className='auth__input' placeholder='пароль' />
                    </div>
                    <button className='auth__submit' type='submit'>Войти</button>
                </form>
            </div>
        </section>
    );
}

export default AuthForm