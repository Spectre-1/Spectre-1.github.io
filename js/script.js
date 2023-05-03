const themeToggleBtn = documenet.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
 ) {
    //show light icon
    themeToggleLightIcon.classList.remove('hidden')
} else {
    //show dark icon
    themeToggleDarkIcon.classList.remove('hidden')
}

themeToggleBtn.addEventListener('click', toggleMode)

function toggleMode() {
    // Togle Icon
    themeToggleLightIcon.classList.toggle('hidden')
    themeToggleDarkIcon.classList.toggle('hidden')

    if(localStorage.getItem('Color-Theme')){
        if (localStorage.getItem('color-theme') === 'light') {
            documenet.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        } else {
            documenet.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        }
    } else {
        if (documment.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        }
    }
}