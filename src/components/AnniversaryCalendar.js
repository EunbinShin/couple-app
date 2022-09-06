import Calendar from 'react-calendar'
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css'
import './AnniversaryCalendar.css'

const AnniversaryCalendar = () => {
    //2022.11.6
    const [today, setToday] = useState()
    const [dDay, setDday] = useState(0)

    const anniversay = new Date('2022-11-06')
    
    const timer = setInterval(()=>{
        const date = new Date()
        const year = String(date.getFullYear())
        const month = String(date.getMonth())
        const day = String(date.getDate())

        const remainingDays =  parseInt(anniversay.getTime()) - parseInt(date.getTime())

        setToday(`${year}년 ${month}월 ${day}일`)
        setDday(Math.floor(remainingDays / (1000*60*60*24)))

    }, 1000)

    setInterval(timer, 5000)

    return(
        <div>
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
}

export default AnniversaryCalendar