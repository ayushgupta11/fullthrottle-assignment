import React from 'react'
import { List, Tag } from 'antd'

export default function Activity({
    activities
}) {
    let getTime = (item) => {
        let minutes = item.end_time.diff(item.start_time, 'minutes')
        let hours = Math.floor(minutes / 60)
        if (hours) {
            return `${hours} hours ${minutes % 60} minutes`
        }
        else {
            return `${minutes} minutes`
        }
    }
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
                        {getTime(item)}
                    </div>
                </List.Item>
            )
            }
        />
    )
}