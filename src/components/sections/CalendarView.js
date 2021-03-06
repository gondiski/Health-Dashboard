import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

const CalendarView = () => {

    const [selectedDay, setSelectedDay] = useState({
        from: null,
        to: null
    });
    return ( <
        Calendar value = { selectedDay }
        onChange = { setSelectedDay }
        shouldHighlightWeekends /
        >
    );

}

export default CalendarView;