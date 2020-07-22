import React from 'react'
import { List, Avatar, Badge, Button } from 'antd'
import { UserOutlined, CompassOutlined } from '@ant-design/icons'

export default function User({
    data,
    openModal
}) {
    return (
        <List.Item
            actions={[
                <Button onClick={() => openModal(data)} type="link">View Activity</Button>
            ]}
        >
            <List.Item.Meta
                avatar={
                    <Badge count={data.activity_periods.length}>
                        <Avatar icon={<UserOutlined />} />
                    </Badge>
                }
                title={data.real_name}
                description={
                    <span className="user-location">
                        <CompassOutlined />
                        <span className="location-text">{data.tz}</span>
                    </span>
                }
            />
        </List.Item>
    )
}