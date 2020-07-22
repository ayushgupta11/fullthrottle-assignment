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
        if(!visible){
            setShow(false)
        }
    }, [visible])
    let getDayActivities = (date) => {
        let currentActivities = activityPeriods.filter((item) => {
            return item.start_date == date || item.end_date == date
        })
        return currentActivities
    }
    return (
        <div className="activity-container">
            {
                show ?
                    <ActivityCalendar getDayActivities={getDayActivities} />
                    : !activities.length ?
                        <div>
                            No Activities Today
                            <Button onClick={() => setShow(true)}>View All Activities</Button>
                        </div>
                        : <Activity />
            }
        </div>
    )
}