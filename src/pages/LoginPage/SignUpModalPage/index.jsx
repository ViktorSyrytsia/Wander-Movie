import React, { useState, useEffect } from 'react';
import { Modal, Button, Header, Form } from 'semantic-ui-react';

import './style.scss';

const SignUpModalPage = ({ setCurrentUser }) => {

        const [userName, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [repeatPassword, setRepeatPassword] = useState('');
        const [email, setEmail] = useState('');

        const [user, setUser] = useState({});

        const [isDisabled, setIsDisabled] = useState(false);

        const handleChange = (e, action) => {
                switch (action) {
                        case 'setUsername':
                                setUsername(e.target.value);
                                break;
                        case 'setPassword':
                                setPassword(e.target.value);
                                break;
                        case 'setRepeatPassword':
                                setRepeatPassword(e.target.value);
                                break;
                        case 'setEmail':
                                setEmail(e.target.value);
                                break;
                        default:
                                break;
                }
        }

        useEffect(() => {
                setCurrentUser(user);
        }, [user])

        const handleSubmit = () => {
                setUser({
                        userName,
                        password,
                        repeatPassword,
                        email
                });
                setIsDisabled(true)
        }

        return (
                <Modal size='tiny' trigger={<Button color='twitter'>Sign up</Button>}>
                        <Modal.Header>Please, sign up</Modal.Header>
                        <Modal.Content>
                                <Modal.Description>
                                        <Header>Create your account. It's free and only takes a minute</Header>
                                        <Form onSubmit={handleSubmit}>
                                                <Form.Group widths='equal'>
                                                        <Form.Input
                                                                fluid label='User name'
                                                                placeholder='User name'
                                                                name='userName'
                                                                value={userName}
                                                                onChange={(e) => handleChange(e, 'setUsername')}
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
                                                        <Form.Input
                                                                fluid label='Repeat password'
                                                                placeholder='Repeat password'
                                                                name='repeatPassword'
                                                                value={repeatPassword}
                                                                onChange={(e) => handleChange(e, 'setRepeatPassword')}
                                                        />
                                                </Form.Group>
                                                <Form.Input
                                                        fluid label='Email'
                                                        placeholder='Email'
                                                        name='email'
                                                        value={email}
                                                        onChange={(e) => handleChange(e, 'setEmail')}
                                                />
                                                <Form.Button color='twitter' disabled={isDisabled}>Submit</Form.Button>
                                        </Form>
                                </Modal.Description>
                        </Modal.Content>
                </Modal>
        )
}

export default SignUpModalPage
