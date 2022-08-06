const body = document.body
const themeButton = document.querySelector('.header__theme-btn')


function switcher() {
  themeButton.classList.toggle('active')
  body.classList.toggle('dark-theme')
}

if (localStorage.theme === 'dark') {
  switcher()
}

themeButton.addEventListener('click', function(event){
  if (event.target.closest('.header__theme-btn')) {
    switcher()

    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light'
    } else {
      localStorage.theme = 'dark'
    }

    console.log(localStorage.theme)
  }
})

