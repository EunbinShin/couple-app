import Calendar from 'react-calendar'
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css'
import './AnniversaryCalendar.css'

const AnniversaryCalendar = (props) => {
    //2022.11.6
    const anniversay = new Date(props.anniversary.date)
    const today = new Date();
    const d_day = Math.ceil((anniversay.getTime() - today.getTime()) / (1000*60*60*24))

    return(
        <div>
            <div>{props.anniversary.content}</div>
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