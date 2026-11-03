/*
 * 브라우저 로컬스토리지를 공통으로 사용하기 위한 유틸 
 */

const getStorage = () => {
    localStorage.setItem('items', JSON.stringify({

    }))
}

const setStorage = () => {

}

export {
    getStorage,
    setStorage
}