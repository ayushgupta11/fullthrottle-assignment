import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import Activity from '../Activity'
import ActivityCalendar from '../ActivityCalendar'

export default function ActivityContainer({
    currentDate,
    activityPeriods,
    visible
}) {
    const [activities, setActivities] = useState([])
    const [show, setShow] = useState(false)
    useEffect(() => {
        let currentActivities = getDayActivities(currentDate)
        setActivities([...currentActivities])
    }, [])
    useEffect(() => {
        if (!visible) {
            setShow(false)
            setActivities([])
        }
    }, [visible])
    let getDayActivities = (date) => {
        let currentActivities = activityPeriods.filter((item) => {
            return item.start_date == date || item.end_date == date
        })
        return currentActivities
    }
    let getMonthActivities = (date) => {
        let currentActivities = activityPeriods.filter((item) => {
            return item.start_time.format('MM-YYYY') == date || item.start_time.format('MM-YYYY') == date
        })
        return currentActivities
    }
    const showActivities = (data) => {
        setActivities([...data])
        setShow(false)
    }
    return (
        <div className="activity-container">
            {
                show ?
                    <ActivityCalendar getMonthActivities={getMonthActivities} getDayActivities={getDayActivities} showActivities={showActivities} />
                    :
                    <div className="activity-list">
                        {
                            !activities.length ?
                                ' No Activities Today'
                                : <Activity activities={activities} />
                        }
                        <Button type="primary" onClick={() => setShow(true)}>View All Activities</Button>
                    </div>
            }
        </div>
    )
}