import React from 'react'
import { Calendar, Badge } from 'antd';

export default function ActivityCalendar({
    getDayActivities
}) {
    const getData = (value) => {
        let dateActivities = getDayActivities(value.format('DD-MM-YYYY'))
        return dateActivities.length
    }
    const DateCellRenderer = (value) => {
        let hasActivity = getData(value)
        return(
            <div>
                {
                    hasActivity?
                    <Badge status={'warning'} />
                    : null
                }
            </div>
        )
    }
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    }
    return (
        <Calendar fullscreen={false} onPanelChange={onPanelChange} dateCellRender={DateCellRenderer} />
    )
}