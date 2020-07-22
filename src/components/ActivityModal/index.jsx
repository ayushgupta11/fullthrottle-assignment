import React, { useState, useEffect } from 'react'
import { Modal } from 'antd'
import moment from 'moment-timezone'
import ActivityContainer from '../ActivityContainer'

export default function AcitivityModal({
    data,
    visible,
    handleClose
}) {
    const [currentDate, setCurrentDate] = useState('')
    const [activityPeriods, setActivityPeriods] = useState([])
    useEffect(() => {
        if(data.hasOwnProperty('tz')){
            setCurrentDate(moment.tz(data.tz).format('DD-MM-YYYY'))
            setActivityPeriods([...getActivityPeriods()])
            console.log(activityPeriods)
        }
    }, [visible])
    const getActivityPeriods = () => {
        return [...data.activity_periods].map((item) => {
            let obj = {
                'start_time': formatDate(item.start_time),
                'end_time': formatDate(item.end_time),
                'start_date': getDate(item.start_time),
                'end_date': getDate(item.end_time)   
            }
            return obj
        })
    }
    const formatDate = (date) => {
        return moment.tz(date, 'MMM DD YYYY hh:mmA', data.tz)
    }
    const getDate = (date) => {
        return formatDate(date).format('DD-MM-YYYY')
    }
    return (
        <Modal
            title="Activity Periods"
            visible={visible}
            onOk={handleClose}
            onCancel={handleClose}
        >
            <ActivityContainer activityPeriods={activityPeriods} currentDate={currentDate} visible={visible} />
        </Modal>
    )
}