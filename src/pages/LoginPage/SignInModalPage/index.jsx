import React, { useState, useEffect } from 'react';

import { Modal, Button, Header, Form } from 'semantic-ui-react';

import './style.scss';

const SignInModalPage = ({ currentUser, setActiveUser }) => {

        const [login, setLogin] = useState('');
        const [password, setPassword] = useState('');

        const [loginData, setLoginData] = useState({});

        const [user, setUser] = useState({});
        useEffect(() => {
                setUser(loginData)
        }, [loginData]);

        useEffect(() => {
                if (user.login === currentUser.userName && user.password === currentUser.password) {
                        console.log('Login complete');
                        setActiveUser(currentUser);

                }
                else console.log('Logid failed');

        }, [user])



        const handleChange = (e, action) => {
                switch (action) {
                        case 'setLogin':
                                setLogin(e.target.value);
                                break;
                        case 'setPassword':
                                setPassword(e.target.value);
                                break;
                        default:
                                break;
                }
        }

        const handleSubmit = () => {
                setLoginData({
                        login,
                        password
                });
        }

        return (
                <Modal size='mini' trigger={<Button color='google plus'>Sign In</Button>}>
                        <Modal.Header>Please, sign in</Modal.Header>
                        <Modal.Content>
                                <Modal.Description>
                                        <Header>Enter your loggin and password</Header>
                                        <Form onSubmit={() => handleSubmit()}>
                                                <Form.Group widths='equal'>
                                                        <Form.Input
                                                                fluid label='User name'
                                                                placeholder='User name'
                                                                name='userName'
                                                                value={login}
                                                                onChange={(e) => handleChange(e, 'setLogin')}
                                                        />
                                                </Form.Group>
                                                <Form.Group widths='equal'>
                                                        <Form.Input
                                                                fluid label='Password'
                                                                placeholder='Password'
                                                                name='password'
                                                                value={password}
                                                                onChange={(e) => handleChange(e, 'setPassword')}
                                                        />

                                                </Form.Group>
                                                <Form.Button color='twitter' >Submit</Form.Button>
                                        </Form>
                                </Modal.Description>
                        </Modal.Content>
                </Modal>
        )
}

export default SignInModalPage
