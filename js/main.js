const calendarDays = document.getElementById("days")
const currentDate = new Date().getDate()

function createDays() {
  let i = 1
  while (i <= 31) {
    day = document.createElement('li')
    day.innerText = i
    if (currentDate == i) {
      day.classList.add('active')
    }
    calendarDays.appendChild(day)
    i += 1
  }
  console.log('exit')
}

createDays()
console.log()