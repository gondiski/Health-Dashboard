import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

const CalendarView = () => {

    const [selectedDay, setSelectedDay] = useState({
        from: null,
        to: null
    });
    return ( <
        Col className = "px-auto py-1 shadow-lg" > <
        Calendar value = { selectedDay }
        onChange = { setSelectedDay }
        shouldHighlightWeekends /
        >
        <
        /
        Col >
    );

}

export default CalendarView;