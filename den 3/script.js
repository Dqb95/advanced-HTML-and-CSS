





const WeekDays = [
    `nedele`
    `pondeli`
    `utery`
    `streda`
    `ctvrtek`
    `patek`
    `sobota`
]

const calendar = document.querySelector(`.calendar`)





function createCalendarDay (num) {
    let el = document.createElement(`div`)
    el.textContent = num
    Calendar.appendChild(el)
}

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







}