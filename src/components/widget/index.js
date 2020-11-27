import React,{useState} from 'react';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const Widget = ({aspectRatio}) => {

    const todayDate = new Date();
    const [selectedDate,handleDateChange] = useState(todayDate);
    const [todaysMeetings,handleAddingMeeting] = useState([]);

    const renderMeeting = (date) => {
        const isToday = (date.getDay() === todayDate.getDay()) &&  (date.getMonth() === todayDate.getMonth()) && (date.getFullYear() === todayDate.getFullYear())
        
        if(isToday) 
            return handleAddingMeeting([...todaysMeetings,selectedDate]);
    }

    
    return (
        <div className={`widget widget-${aspectRatio}`}> 
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div>
                    <p>اختار الموعد</p>
                    <DateTimePicker onAccept={(date)=>renderMeeting(date)} value={selectedDate} onChange={handleDateChange} />
                </div>
                <div className="meetings">
                    {todaysMeetings.length > 0 && <h4>مقابلات اليوم</h4>}
                    {todaysMeetings.length > 0 ? todaysMeetings.map((meeting) => {
                        return <div className="meeting-container">
                            {new Date(meeting).toLocaleString()}
                        </div>
                    }) : 'لا يوجد اي مقابلات اليوم'}
                </div>
            </MuiPickersUtilsProvider>
        </div>
     )
}

export default Widget;