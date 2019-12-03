const openEyes = document.querySelector('.eyes')
const blinkedEyes = document.querySelector('.blink')
const closedEyes = document.querySelector('.closed')
const happyBubble = document.querySelector('.happy')
const hearts = document.querySelector('.hearts')
const mouth = document.querySelector('.mouth')

// Event classes
const head = document.querySelector('.head')
const legs = document.querySelectorAll('.leg')
const chest = document.querySelector('.chest')
const ears = document.querySelectorAll('.ear')

if (isMobile()) {
  document.querySelector('.mobile-block').style.display = 'flex'
  document.querySelector('.container').style.display = 'none'
}

head.addEventListener('mousedown', enableAnimations)
chest.addEventListener('mousedown', enableAnimations)

legs.forEach(leg => {
  leg.addEventListener('mousedown', enableAnimations)
})

ears.forEach(ear => {
  ear.addEventListener('mousedown', enableAnimations)
})

// https://stackoverflow.com/questions/17436760/detect-mouseup-outside-of-mousedown-element
document.addEventListener('mouseup', disableAnimations)

// Original implementation included the use of .toggle.
// Because we know when we want animations to be enabled or disabled, this approach is guaranteed to reveal and conceal specific elements. 
function enableAnimations () {
  openEyes.classList.remove('is-visible')
  blinkedEyes.classList.remove('is-visible')
  closedEyes.classList.add('is-visible')
  hearts.classList.add('is-visible')
  mouth.classList.add('is-visible')
  happyBubble.classList.remove('after-pet')
}

function disableAnimations () {
  openEyes.classList.add('is-visible')
  blinkedEyes.classList.add('is-visible')
  closedEyes.classList.remove('is-visible')
  hearts.classList.remove('is-visible')
  mouth.classList.remove('is-visible')
  happyBubble.classList.add('after-pet')
}

function isMobile() {
  return typeof window.orientation !== 'undefined'
}