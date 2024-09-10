// const time = document.getElementById('currentTime')
// const day = document.getElementById('currentDay')
// const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// const currentDate = new Date()


// const currentDay = dayIndex[currentDate.getUTCDay()]
// const currentMinute = currentDate.getUTCMinutes()
// const currentHour = currentDate.getUTCHours()

// // Update the correct time and date in the dom
// day.children[0].innerText += `   ${currentDay}`
// time.children[0].innerText += `  ${currentHour} : ${currentMinute}`


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

// using document object to target dom elements
const selectNav = document.querySelectorAll(".navRef")
const navFill = document.querySelectorAll(".fill")
const selectContent = document.querySelectorAll(".content-item")
const navRef = document.getElementById('navRefParent')
const resumeContent = document.getElementById('resume-content')


selectNav.forEach(nav => {

    // for scrolling to the appropriate content

    nav.addEventListener('click', () => {


        selectContent.forEach(content => {
            if (content.id === nav.attributes['data-target'].value) {
                resumeContent.scroll({
                    top: content.offsetTop - 3,
                    behavior: 'smooth'
                })


                // for adding active class to the appropriate and active nav button span
                navFill.forEach(fill => {
                    fill.classList.remove('active')
                    if (fill.offsetParent.attributes['data-target'].value === content.id) {
                        fill.classList.add('active')
                    }
                })
            }
        })
    })
})


particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 40,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 3,
                "color": "#FD6F00"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false
        },
        "size": {
            "value": 5,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 130,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out"
        }
    }
});

particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Particles.js config loaded');
});