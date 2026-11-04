import { format, subDays, addDays, isToday } from 'date-fns';
import { ko } from 'date-fns/locale';

type DateParts = {
    year: number;
    month: number;
    day: number;
    weekday: string;
};

// Date 분리
function dateParts(date: Date) : DateParts{
    return {
        year: Number(format(date, 'yyyy')),
        month: Number(format(date, 'M')),
        day: Number(format(date, 'd')),
        weekday: format(date, 'EEE'),   
    }
}

// Date 포멧 설정
function dateFormat(date = new Date(), formatDate = 'yyyyMMdd') : string{
    return format(date, formatDate, { locale: ko });
}

function subDate(date = new Date()) : Date {
    return subDays(date, 1);
}

function addDate(date = new Date()) : Date {
    return addDays(date, 1);
}

function atToday(date: Date) : boolean {
    return isToday(date);
}

export {
    dateParts,
    dateFormat,
    subDate,
    addDate,
    atToday,
    type DateParts,
}