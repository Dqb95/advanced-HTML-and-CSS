const MonthsDays = [
    `leden`
    `unor`
    `brezen`
    `duben`
    `kveten`
    `cerven`
    `cervenec`
    `srpen`
    `zari`
    `rijen`
    `listopad`
    `prosinec`
]

const WeekDays = [
    `nedele`
    `pondeli`
    `utery`
    `streda`
    `ctvrtek`
    `patek`
    `sobota`
]

let month = 10
let year = 2021

const calendar = document.querySelector(`.calendar`)

function createCalendarDay (dt) {
    let el = document.createElement(`div`)
    el.textContent = dt.getDate()
    el.classList.add(`month-day`)

/*
    if (dt.getMonth() === month) {
        el.classList.add(`this-month`)
    } else {
        el.classList.add(`another-month`)
    }
*/

     if ([0, 6].indexOf(dt.getDate()) > -1) {
        el.classList,add(`weekend-day`)
     }

    el.classList.add(dt.getMonth === month ? `this-month` : `another-month`)

    if([0, 6].indexOf(dt.getDate()) > - 1) {
        el.classList.add(`weekend-day`)
    }

    let today = new Date()
    if (dt.getFullYear() === today.getFullYear() && dt.getMonth() === today.getMonth() && dt.getDate() === today.getDate)

    calendar.appendChild(el)
}


function setHeader (month, year)



function getMonthDays(month, year) {

    let numberOfDays = new Date (year, month + 1, 0).getDate()

    let lastDay = new Date(year, month, numberOfDays).getDate()
    if (lastDay === 0) {
        lastDay = 7
    }

    let firstDay = new Date(year, month, numberOfDays).getDate()
    if (firstDay === 0) {
        firstDay = 7
    }

    for (let i = 1; i < firstDay; i++) {
        createCalendarDay(new Date(year, month, 1 - firstDay + i), month)
    }

    for (let i = 1; i <=numberOfDays; i++) {
        createCalendarDay(new Date(year, month, i), month)
    }

    for (let i = 1; i <= 7 - lastDay; i++) {
        createCalendarDay(new Date(year, month + 1, i), month)
    }
}

document.getElementById(`dozadu`).addEventListener(`click`, function(){
    calendar.innerHTML = ``
    document.createElement
    if (month === 0) {
        month = 11
        year --
    } else {
        month--
    }
    setHeader (month, year)
    getMonthDays (month, year)
})

document.getElementById(`dopredu`).addEventListener(`click`, function(){
    calendar.innerHTML = ``
    if (month === 11) {
        month = 0
        year++
    } else {
        month++
    }
    setHeader(month, year)
    getMonthDays(Month, year)
})

setHeader(month, year)
getMonthDays(month, year)
