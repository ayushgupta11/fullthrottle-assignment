import React from 'react'
import User from '../User'
import { List } from 'antd'

export default function UserList({
    data
}) {
    let { members } = { ...data.data }
    return (
        <div>
            {
                data.loading ?
                    'Loading...'
                    : data.error ?
                        'Some error occured'
                        : members ?
                            <List
                                itemLayout="horizontal"
                                dataSource={members}
                                renderItem={item =>
                                    <User data={item} />
                                }
                            />
                            : null
            }
        </div>
    )
}