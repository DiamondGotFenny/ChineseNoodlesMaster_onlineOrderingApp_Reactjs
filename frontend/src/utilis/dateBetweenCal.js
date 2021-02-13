const DaysBetween=(startDate,endDate)=>{
    // The number of milliseconds in all UTC days (no DST)
    const oneDay = 1000 * 60 * 60 * 24;

    // A day in UTC always lasts 24 hours (unlike in other time formats)
    const start = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    const end = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

    // so it's safe to divide by 24 hours

    return Math.abs((start - end) / oneDay);
}

export const CalculateDateBetween=(currentDate,targetDate)=>{
    const dateArr=targetDate.date.split("/");
    const targetDateObj=new Date(dateArr[0],dateArr[1]-1,dateArr[2],currentDate.getHours(),currentDate.getMinutes(),currentDate.getSeconds());
    const duration=DaysBetween(currentDate,targetDateObj)
    return duration;
}
