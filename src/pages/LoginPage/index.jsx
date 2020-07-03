import React from 'react';
import SignInModalPage from '../../containers/SignInModalPage';
import SignUpModalPage from '../../containers/SignUpModalPage';

import './style.scss';

const LoginPage = () => {
        return (
                <div className='login-page-main'>
                        <div className='login-page'>
                                <div className='login-page-title'>Welcome</div>
                                <div className='login-page-meta'>Please, login in to your account. Or create a new account</div>
                                <div className='login-page-container'>
                                        <SignInModalPage />
                                        <SignUpModalPage />
                                </div>

                        </div>
                </div>

        )
}

export default LoginPage
