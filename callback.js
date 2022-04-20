const gioBatDauDi = 19
// CALLBACK
function con_tho_an_co(gioAn, hanhdongkhac) {
    return setTimeout(() => {
        console.log(`Con thỏ ăn cỏ lúc: ${gioAn}h`)
        console.log(`Con thỏ ăn xong lúc: ${gioAn + 1}h`)
        hanhdongkhac(gioAn + 1, con_tho_di_dao)
    }, 1000)
}

function con_tho_di_xem_phim(gioXemPhim, hanhdongkhac) {
    return setTimeout(() => {
        console.log(`Con thỏ đi xem phim xong lúc: ${gioXemPhim + 2}h`)
        hanhdongkhac(gioXemPhim + 2)
    }, 2000)
}

function con_tho_di_dao(gioDiDao) {
    return setTimeout(() => {
        console.log(`Con thỏ đi dạo xong lúc: ${gioDiDao + 1}h`)
        console.log(`Tổng thời gian đi chơi là ${gioDiDao + 1 - gioBatDauDi} tiếng`)
    }, 1000)
}


con_tho_an_co(gioBatDauDi, con_tho_di_xem_phim)