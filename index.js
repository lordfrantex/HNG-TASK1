const time = document.getElementById('currentTime')
const day = document.getElementById('currentDay')
const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const currentDate = new Date()


const currentDay = dayIndex[currentDate.getUTCDay()]
const currentMinute = currentDate.getUTCMinutes()
const currentHour = currentDate.getUTCHours()

// Update the correct time and date in the dom
day.children[0].innerText += `   ${currentDay}`
time.children[0].innerText += `  ${currentHour} : ${currentMinute}`


const navigation = document.getElementById('navigation')
const toggleNav = document.getElementById('toggle-nav')
const tex = document.getElementById("tex")
const navLink = document.querySelectorAll(".navlink")

toggleNav.addEventListener('click', () => {
    navigation.classList.toggle('responsive')
    tex.classList.toggle('responsive')
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.toggle('responsive')
        tex.classList.toggle('responsive')


    })
})