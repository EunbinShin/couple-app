import Calendar from 'react-calendar'
import dayjs from 'dayjs';
import { forwardRef } from "react";
import 'react-calendar/dist/Calendar.css'
import './AnniversaryCalendar.css'

const AnniversaryCalendar = forwardRef((props, ref) => {
    //2022.11.6
    const anniversay = new Date('2022-11-06')
    const today = new Date();
    const d_day = Math.ceil((anniversay.getTime() - today.getTime()) / (1000*60*60*24))

    return(
        <div ref={ref}>
            <Calendar 
                className='disable_click'
                value={anniversay}
                formatYear={(locale, date) => dayjs(date).format('')}
                formatDay={(locale, date) => dayjs(date).format('DD')}
            />
            <span>* <b>{d_day}일</b> 남았습니다.</span>
        </div>
    )
})

export default AnniversaryCalendar