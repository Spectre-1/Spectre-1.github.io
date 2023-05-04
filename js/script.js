const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    themeToggleLightIcon.classList.remove('hidden')
  } else {
    themeToggleDarkIcon.classList.remove('hidden')
  }

themeToggleBtn.addEventListener('click', toggleMode)

function toggleMode() {
  themeToggleDarkIcon.classList.toggle('hidden')
  themeToggleLightIcon.classList.toggle('hidden')

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
} 

function copyItem(button) {
  const itemToCopy = document.getElementById("item-to-copy").textContent;
  navigator.clipboard.writeText(itemToCopy);
  button.textContent = "Item copied!";
  const confirmed = window.confirm("Item copied to clipboard! Click OK to dismiss this message.");
  if (confirmed) {
    button.textContent = "Copy Item";
  }
}


function goToLinkedIn() {
  var linkedinUrl = "https://www.linkedin.com/in/philip-gudijanto//";
  var newTab = window.open(linkedinUrl, "_blank");

  if (!newTab || newTab.closed || typeof newTab.closed == 'undefined') {
    // Popup blocked
    alert("Pop-up blocked. Please allow pop-ups for this site and try again.");
  }
}
