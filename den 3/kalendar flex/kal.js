const monthDays = [
    'leden',
    'únor',
    'březen',
    'duben',
    'květen',
    'červen',
    'červenec',
    'srpen',
    'září',
    'říjen',
    'listopad',
    'prosinec'
  ]
  const weekDays = [
    'neděle',
    'pondělí',
    'úterý',
    'středa',
    'čtvrtek',
    'pátek',
    'sobota'
  ]
  
  let month = 10
  let year = 2021
  
  let calendarRows = []
  
  const calendar = document.querySelector('.calendar')
  
  function createCalendarRow () {
    const row = document.createElement('div')
    row.classList.add('calendar-row')
    calendarRows.push(row)
    calendar.appendChild(row)
  }
  
  function createCalendarDay (dt, month) {
    if (dt.getDay() === 1) {
      createCalendarRow()
    }
  
    let el = document.createElement('div')
    el.textContent = dt.getDate()
    el.classList.add('month-day')
    el.classList.add(dt.getMonth() === month ? 'this-month' : 'another-month')
    if([0, 6].indexOf(dt.getDay()) > - 1) {
      el.classList.add('weekend-day')
    }
    let today = new Date()
    if (dt.getFullYear() === today.getFullYear() && dt.getMonth() === today.getMonth() && dt.getDate() === today.getDate()) {
      el.classList.add('today')
    }
    calendarRows[calendarRows.length - 1].appendChild(el)
  }
  
  function setHeader(month, year) {
    document.querySelector('h1').textContent = monthDays[month] + ' ' + year
  }
  
  function getMonthDays(month, year) {
  
  
    let numberOfDays = new Date(year, month + 1, 0).getDate()
  
    let lastDay = new Date(year, month, numberOfDays).getDay()
    if (lastDay === 0) {
      lastDay = 7
    }
  
    let firstDay = new Date(year, month, 1).getDay()
    if (firstDay === 0) {
      firstDay = 7
    }
  
    // generuji dny přechozího měsíce
    for (let i = 1; i < firstDay; i++) {
      createCalendarDay(new Date(year, month, 1 - firstDay + i), month)
    }
  
    // generuji dny v měsíci
    for (let i = 1; i <= numberOfDays; i++) {
      createCalendarDay(new Date(year, month, i), month)
    }
  
    // generuji dny následujícího měsíce
    for (let i = 1; i <= 7 - lastDay; i++) {
      createCalendarDay(new Date(year, month + 1, i), month)
    }
  }
  
  document.getElementById('dozadu').addEventListener('click', function() {
    calendar.innerHTML = ''
    if (month === 0) {
      month = 11
      year--
    } else {
      month--
    }
    setHeader(month, year)
    getMonthDays(month, year)
  })
  
  document.getElementById('dopredu').addEventListener('click', function() {
    calendar.innerHTML = ''
    if (month === 11) {
      month = 0
      year++
    } else {
      month++
    }
    setHeader(month, year)
    getMonthDays(month, year)
  })
  
  
  setHeader(month, year)
  getMonthDays(month, year)
  