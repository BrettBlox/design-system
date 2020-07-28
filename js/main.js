const body = document.querySelector('body')
const darkButton = document.querySelector('.dark')
const oledButton = document.querySelector('.oled')
const lightButton = document.querySelector('.light')

function darkTheme() {
  body.classList.remove('oled')
  body.classList.add('dark')
}

function oledTheme() {
  body.classList.remove('dark', 'oled')
  body.classList.add('dark', 'oled')
}

function lightTheme() {
  body.classList.remove('dark','oled')
}

darkButton.addEventListener('click', darkTheme)
oledButton.addEventListener('click', oledTheme)
lightButton.addEventListener('click', lightTheme)
