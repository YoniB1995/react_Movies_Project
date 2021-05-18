import {React, useState} from 'react';

function TodayTime(){
    const [time,setTime] = useState(Date.now())
    function whatTime(){
        setTime(Date.now());
    }

    setInterval(whatTime,1000);

    return(
        <div>
            <p>{time}</p>
        </div>
    )
}

export default TodayTime;