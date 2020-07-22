import React, { useState } from 'react'
import { Calendar, Badge, Button } from 'antd';

export default function ActivityCalendar({
    getDayActivities,
    showActivities,
    getMonthActivities
}) {
    const [activity, setActivity] = useState([])
    const [mode, setMode] = useState('month')
    const getData = (value) => {
        if(mode == 'month'){
            let dateActivities = getDayActivities(value.format('DD-MM-YYYY'))
            return dateActivities
        }
        else{
            let monthActivities = getMonthActivities(value.format('MM-YYYY'))
            return monthActivities
        }
    }
    const CellRenderer = (value) => {
        let hasActivity = getData(value)
        return(
            <div>
                {
                    hasActivity.length?
                    hasActivity.map((item, index) => (
                        <Badge status={'warning'} key={index} />
                    ))
                    : null
                }
            </div>
        )
    }
    const onPanelChange = (value, mode) => {
        setMode(mode)
        console.log(value.format('YYYY-MM-DD'), mode);
    }
    const onDateChange = (value) => {
        let dateActivities = []
        if(mode == 'year'){
            dateActivities = getMonthActivities(value.format('MM-YYYY'))
        }
        else{
            dateActivities = getDayActivities(value.format('DD-MM-YYYY'))
        }
        setActivity([...dateActivities])
    }
    return (
        <div className="activity-calendar">
        <Calendar 
            onChange={onDateChange} 
            fullscreen={false} 
            onPanelChange={onPanelChange} 
            dateCellRender={CellRenderer}
            monthCellRender={CellRenderer} 
        />
        <Button onClick={() => showActivities(activity)} type="primary" disabled={activity.length ? false : true}>
            {
                activity.length?
                `Show Actvities (${activity.length})`
                : 'No Activities'
            }
        </Button>
        </div>
    )
}