import React from 'react'
import { List, Tag } from 'antd'

export default function Activity({
    activities
}) {
    return (
        <List
            itemLayout="horizontal"
            dataSource={activities}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={'Activity'}
                        description={
                            <Tag color="#108ee9">
                                {
                                    `${item.start_time.format('hh:mmA')} - ${item.end_time.format('hh:mmA')}`
                                }
                            </Tag>
                        }
                    />
                    <div style={{ fontWeight: 'bold' }}>
                        {item.end_time.diff(item.start_time, 'minutes')} minutes
                    </div>
                </List.Item>
            )
            }
        />
    )
}