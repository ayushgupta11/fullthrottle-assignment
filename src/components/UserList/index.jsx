import React, { useState } from 'react'
import User from '../User'
import { List } from 'antd'
import AcitvityModal from '../ActivityModal'

export default function UserList({
    data
}) {
    const [userData, setUserData] = useState({})
    const [visible, setVisible] = useState(false)
    let { members } = { ...data.data }
    const handleClose = () => {
        setVisible(false)
        setUserData({})
    }
    const openModal = (obj) => {
        setUserData({...obj})
        setVisible(true)
    }
    return (
        <div>
            <h2>Activity Tracker</h2>
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
                                    <User data={item} openModal={openModal} />
                                }
                            />
                            : null
            }
            <AcitvityModal
                visible={visible}
                data={userData}
                handleClose={handleClose}
            />
        </div>
    )
}