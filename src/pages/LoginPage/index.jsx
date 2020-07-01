import React from 'react';

import { Button } from 'semantic-ui-react';

import './style.scss';

const LoginPage = () => {
        return (
                <div className='login-page-main'>
                        <div className='login-page'>
                                <div className='login-page-title'>Welcome</div>
                                <div className='login-page-meta'>Please, login in to your account. Or create a new account</div>
                                <div className='login-page-container'>
                                        <Button color='google plus'>Sign In</Button>
                                        <Button color='twitter'>Sign up</Button>
                                </div>

                        </div>
                </div>

        )
}

export default LoginPage
