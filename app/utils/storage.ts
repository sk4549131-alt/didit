/*
 * 브라우저 로컬스토리지를 공통으로 사용하기 위한 유틸 
 */

import { format } from 'date-fns';

// 로컬 시간 기준 YYYYMMDD
function dateKey(d = new Date()) {
    return format(d, 'yyyyMMdd');
}

const getStorage = () => {
    localStorage.setItem('items', JSON.stringify({

    }))
}

const setStorage = () => {

}

export {
    dateKey,
    getStorage,
    setStorage
}