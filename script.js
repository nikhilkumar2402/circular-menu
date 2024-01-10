let active = 3;
let panelcircle = document.querySelectorAll(".panelcircle");
let stripe = document.querySelectorAll(".stripe");
gsap.to(panelcircle[active - 1], {
    opacity: 0.5
})

gsap.to(stripe[active - 1], {
    opacity: 0.8
})

panelcircle.forEach(function(elem, index){
    elem.addEventListener('click', function(){
        gsap.to(stripe, {
            opacity: 0.3,
            ease: Expo.easeInOut,
            duration: 1
        })
        gsap.to(stripe[index], {
            opacity: 0.8,
            ease: Expo.easeInOut,
            duration: 1
        })
        gsap.to('#circle', {
            rotate: (active - (index + 1))*10,
            ease: Expo.easeInOut,
            duration: 1
        })
        gsap.to(panelcircle, {
            opacity: 0.1,
        })
        gsap.to(elem, {
            opacity: 0.5,
        })
    })
})


gsap.from("#circle", {
    rotate: 70,
    duration: 2,
    ease: Expo.easeInOut
})