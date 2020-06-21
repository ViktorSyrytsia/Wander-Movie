import React from 'react'

import { Icon, Pagination } from 'semantic-ui-react'

import './style.scss';

export default function PaginationPanel({ activePageChange }) {



        return (

                <div className='pagination-panel-container'>
                        <Pagination
                                onPageChange={(e, data) => activePageChange(data.activePage)}
                                defaultActivePage={1}
                                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                                totalPages={20}
                        />
                </div>

        )
}
