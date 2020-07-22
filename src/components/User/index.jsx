import React from 'react'
import { List, Avatar, Badge } from 'antd'
import { UserOutlined, CompassOutlined } from '@ant-design/icons'

export default function User({
    data
}) {
    return (
        <List.Item
            actions={[
                <a key="list-loadmore-edit">View Activity</a>
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
            <div className="user-id">
                <UserOutlined />
                {data.id}
            </div>
        </List.Item>
    )
}