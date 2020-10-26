TweenMax.to('.first', 1.5, {
    delay: .2,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.second', 1.5, {
    delay: .4,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.third', 1.5, {
    delay: .6,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.from('.header', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from('.search', 1, {
    delay: 1.6,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from('.gsap-btn', 1, {
    delay: 1.8,
    opacity: 0,
    x: -70,
    ease: Expo.easeInOut
})

TweenMax.from('.gsap-btn2', 1, {
    delay: 2.2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from('.gsap-task', 1, {
    delay: 2.5,
    opacity: 0,
    x: -70,
    ease: Expo.easeInOut
})

TweenMax.from('.gsap-project-author', 1, {
    delay: 2.8,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
})

TweenMax.from('.gsap-git', 0.3, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Power4.easeInOut
})
