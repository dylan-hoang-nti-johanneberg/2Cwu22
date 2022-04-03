const calendarDays = document.getElementById("days")
const currentDate = new Date().getDate()
const currentMonth = new Date().getMonth()+1
//const navlistBoxHref = document.getElementById("nv-link-1")
const eventText = document.getElementById("description")
const eventTitle = document.getElementById("eventTitle")
const btnPage1 = document.getElementById("btn-pg1")
const btnPage2 = document.getElementById("btn-pg2")
const btnPage3 = document.getElementById("btn-pg3")

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

// Add event on click to redirect to href.
// navlistBoxHref.addEventListener('click', () => {
//   console.log("click")
// })
function currentEvent() {
  arr = []
  return fetch('misc/events.json')
  .then(response => response.json())
  .then(data => data.lorem)
} 

async function addEventText() {
  eventTitle.innerText = `Events on ${currentDate}/${currentMonth}`
  eventText.innerText = await currentEvent()
}

function clearPage(L1, R1, L2, R2) {
    L1.innerHTML = ""
    R1.className = ""
    L2.className = ""
    R2.innerHTML = ""
}

function clearActivePage() {
    btnPage1.className = ""
    btnPage2.className = ""
    btnPage3.className = ""
}

function page1Loader() {
    const TextLeft = document.getElementById('Left1')
    const ImageRight = document.getElementById('Right1')
    const ImageLeft = document.getElementById('Left2')
    const TextRight = document.getElementById('Right2')
    
    clearPage(TextLeft, ImageRight, ImageLeft, TextRight)
    clearPage(ImageLeft, TextRight, TextLeft, ImageRight)
    clearActivePage()
    btnPage1.classList.add('activePage')
    
    TextLeft.classList.add('borderNews')
    TextLeft.classList.add('BlackBG')
    ImageRight.classList.add('borderNews')
    ImageLeft.classList.add('borderNews')
    TextRight.classList.add('borderNews')
    TextRight.classList.add('BlackBG')
    
    titleL = document.createElement('h2')
    titleL.innerText = "Clash Royale Balance Changes"
    titleL.classList.add('newsTxtTitle') 
    titleL.classList.add('titles')
    TextLeft.appendChild(titleL)
    
    textL = document.createElement('p')
    textL.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam facere amet tenetur obcaecati reprehenderit, quas quibusdam enim eligendi deleniti. Mollitia labore iste nihil, voluptatem illum ullam numquam obcaecati accusamus nesciunt deserunt suscipit, eligendi rem amet, reiciendis eius id vitae fuga aliquam quibusdam. Eveniet qui error accusantium magni! Dolores, suscipit. Repellendus."
    textL.classList.add('newsText')
    TextLeft.appendChild(textL)
    
    titleR = document.createElement('h2')
    titleR.innerText = "New Peripheral Equipment for DogeEsports"
    titleR.classList.add('newsTxtTitle') 
    titleR.classList.add('titles')
    TextRight.appendChild(titleR)
    
    textR = document.createElement('p')
    textR.innerText = "Mouse: GPRO Wireless / Superlight    Controller: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam facere amet tenetur obcaecati reprehenderit, quas quibusdam enim eligendi deleniti. Mollitia labore iste nihil, voluptatem illum ullam numquam obcaecati accusamus nesciunt deserunt suscipit, eligendi rem amet, reiciendis eius id vitae fuga aliquam quibusdam. Eveniet qui error accusantium magni! Dolores, suscipit. Repellendus."
    textR.classList.add('newsText')
    TextRight.appendChild(textR)
    
    ImageRight.classList.add('page1IMG-Right')
    ImageLeft.classList.add('page1IMG-Left')
    
  }
  
  function page2Loader() {
    const ImageLeft = document.getElementById('Left1')
    const TextRight = document.getElementById('Right1')
    const TextLeft = document.getElementById('Left2')
    const ImageRight = document.getElementById('Right2')
    
    clearPage(ImageLeft, TextRight, TextLeft, ImageRight)
    clearPage(TextLeft, ImageRight, ImageLeft, TextRight)
    clearActivePage()
    btnPage2.classList.add('activePage')

    TextLeft.classList.add('borderNews')
    TextLeft.classList.add('BlackBG')
    ImageRight.classList.add('borderNews')
    ImageLeft.classList.add('borderNews')
    TextRight.classList.add('borderNews')
    TextRight.classList.add('BlackBG')

    titleR = document.createElement('h2')
    titleR.innerText = "DennisDoge | Tetr.io Pro"
    titleR.classList.add('newsTxtTitle') 
    titleR.classList.add('titles') 
    TextRight.appendChild(titleR)
    
    textR = document.createElement('p')
    textR.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam facere amet tenetur obcaecati reprehenderit, quas quibusdam enim eligendi deleniti. Mollitia labore iste nihil, voluptatem illum ullam numquam obcaecati accusamus nesciunt deserunt suscipit, eligendi rem amet, reiciendis eius id vitae fuga aliquam quibusdam. Eveniet qui error accusantium magni! Dolores, suscipit. Repellendus."
    textR.classList.add('newsText')
    TextRight.appendChild(textR)

    titleL = document.createElement('h2')
    titleL.innerText = "Losing is Part of The Journey- This is How We Handle It"
    titleL.classList.add('newsTxtTitle') 
    titleL.classList.add('titles') 
    TextLeft.appendChild(titleL)
    
    textL = document.createElement('p')
    textL.innerText = "Welcome Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam facere amet tenetur obcaecati reprehenderit, quas quibusdam enim eligendi deleniti. Mollitia labore iste nihil, voluptatem illum ullam numquam obcaecati accusamus nesciunt deserunt suscipit, eligendi rem amet, reiciendis eius id vitae fuga aliquam quibusdam. Eveniet qui error accusantium magni! Dolores, suscipit. Repellendus."
    textL.classList.add('newsText')
    TextLeft.appendChild(textL)
    
    
    ImageLeft.classList.add('page2IMG-Left')
    ImageRight.classList.add('page2IMG-Right')
}

function page3Loader() {
    const TextLeft = document.getElementById('Left1')
    const ImageRight = document.getElementById('Right1')
    const ImageLeft = document.getElementById('Left2')
    const TextRight = document.getElementById('Right2')

    clearPage(TextLeft, ImageRight, ImageLeft, TextRight)
    clearPage(ImageLeft, TextRight, TextLeft, ImageRight)
    clearActivePage()
    btnPage3.classList.add('activePage')

    TextLeft.classList.add('borderNews')
    TextLeft.classList.add('BlackBG')
    ImageRight.classList.add('borderNews')
    ImageLeft.classList.add('borderNews')
    TextRight.classList.add('borderNews')
    TextRight.classList.add('BlackBG')

    titleL = document.createElement('h2')
    titleL.innerText = "Epic's New Update on FN Leads to More Saved Keyswitches"
    titleL.classList.add('newsTxtTitle') 
    titleL.classList.add('titles') 
    TextLeft.appendChild(titleL)
    
    textL = document.createElement('p')
    textL.innerText = "Welcome Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam facere amet tenetur obcaecati reprehenderit, quas quibusdam enim eligendi deleniti. Mollitia labore iste nihil, voluptatem illum ullam numquam obcaecati accusamus nesciunt deserunt suscipit, eligendi rem amet, reiciendis eius id vitae fuga aliquam quibusdam. Eveniet qui error accusantium magni! Dolores, suscipit. Repellendus."
    textL.classList.add('newsText')
    TextLeft.appendChild(textL)
    
    titleR = document.createElement('h2')
    titleR.innerText = "Hardware | To Stay on top, You Need Power and RGB."
    titleR.classList.add('newsTxtTitle') 
    titleR.classList.add('titles') 
    TextRight.appendChild(titleR)
    
    textR = document.createElement('p')
    textR.innerText = "Welcome Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam facere amet tenetur obcaecati reprehenderit, quas quibusdam enim eligendi deleniti. Mollitia labore iste nihil, voluptatem illum ullam numquam obcaecati accusamus nesciunt deserunt suscipit, eligendi rem amet, reiciendis eius id vitae fuga aliquam quibusdam. Eveniet qui error accusantium magni! Dolores, suscipit. Repellendus."
    textR.classList.add('newsText')
    TextRight.appendChild(textR)
    
    ImageRight.classList.add('page3IMG-Right')
    ImageLeft.classList.add('page3IMG-Left')
}

if (btnPage2 != null) {
  btnPage1.addEventListener("click", page1Loader)
  btnPage2.addEventListener('click', page2Loader)
  btnPage3.addEventListener('click', page3Loader)
}

if (calendarDays != null) {
  createDays()
  addEventText()
}

console.log()