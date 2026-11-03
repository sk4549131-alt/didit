import { format, subDays, addDays, isToday } from 'date-fns';
import { ko } from 'date-fns/locale';

/**
 * Date 포멧 설정
 * @param date 
 * @param formatDate 
 */
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
    dateFormat,
    subDate,
    addDate,
    atToday
}