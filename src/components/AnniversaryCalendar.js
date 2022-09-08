import Calendar from 'react-calendar'
import dayjs from 'dayjs';
import { forwardRef } from "react";
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css'
import './AnniversaryCalendar.css'

const AnniversaryCalendar = forwardRef((props, ref) => {
    //2022.11.6
    const anniversay = new Date(props.anniversary.date)
    const [today, setToday] = useState()
    const [dDay, setDday] = useState(0)

    useEffect(()=>{
        const timer = setInterval(()=>{
            const date = new Date()
            const year = String(date.getFullYear())
            const month = String(date.getMonth()+1)
            const day = String(date.getDate())
    
            const remainingDays =  parseInt(anniversay.getTime()) - parseInt(date.getTime())
    
            setToday(`${year}년 ${month}월 ${day}일`)
            setDday(Math.ceil(remainingDays / (1000*60*60*24)))
    
        }, 5000)
        return (()=>clearInterval(timer))
    }, [])

    return(
        <div ref={ref} className="anniversary_calendar">
            <div className='anniversary_content'>{props.anniversary.content}</div>
            <Calendar 
                className='disable_click'
                value={anniversay}
                formatYear={(locale, date) => dayjs(date).format('')}
                formatDay={(locale, date) => dayjs(date).format('DD')}
            />
            <span>* <b>{dDay}일</b> 남았습니다.</span>
            <div>오늘은 {today}</div>
        </div>
    )
})

export default AnniversaryCalendar