import React from 'react';

import { Modal, Button, Header } from 'semantic-ui-react';

import './style.scss';

const SignInModalPage = () => {
        return (
                <Modal size='mini' trigger={<Button color='google plus'>Sign In</Button>}>
                        <Modal.Header>Please, sign in</Modal.Header>
                        <Modal.Content>
                                <Modal.Description>
                                        <Header>Enter your loggin and password</Header>
                                        <p>Loggin:</p>
                                        <input type='text' placeholder='Enter your loggin'></input>
                                        <p>Passwaord:</p>
                                        <input type='password' placeholder='Enter your password'></input>
                                        <div className='button-group-sign-in'>
                                                <Button color='twitter'>Submit</Button>
                                                <Button color='google plus'>Cancel</Button>
                                        </div>
                                </Modal.Description>
                        </Modal.Content>
                </Modal>
        )
}

export default SignInModalPage
