import React, { useContext } from 'react';

import { ThemeContext } from '../../context';

import './style.scss';

export default function LoadingIndicator() {

        const { dark } = useContext(ThemeContext);

        return (
                <div className='loading-indicator-container'>
                        <div className={`loadingio-spinner-ellipsis-pgusqzlze8c${dark ? '-dark' : ''}`}><div className="ldio-5pzu4pzu5r6">
                                <div></div><div></div><div></div><div></div><div></div>
                        </div></div>
                </div>
        )
}
