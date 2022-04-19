const gioBatDauDi = 19
// PROMISE
function con_tho_di_choi(gioDi) {
    return new Promise((resolve, reject) => {
        resolve(gioDi)
    })
}

con_tho_di_choi(gioBatDauDi)
.then((gioAn) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Con thỏ ăn cỏ lúc: ${gioAn}h`)
            console.log(`Con thỏ ăn xong lúc: ${gioAn + 1}h`)
            resolve(gioAn + 1)
        }, 1000)

    })
})
.then((gioXemPhim) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Con thỏ đi xem phim xong lúc: ${gioXemPhim + 2}h`)
            resolve(gioXemPhim + 2)
        }, 2000)
    })
})
.then((gioDiDao) => {
    return new Promise(() => {
        setTimeout(() => {
            console.log(`Con thỏ đi dạo xong lúc: ${gioDiDao + 1}h`)
            console.log(`Tổng thời gian đi chơi là ${gioDiDao + 1 - gioBatDauDi} tiếng`)
        }, 1000)
    })
})