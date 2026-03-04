const root = document.documentElement
const key = 'theme'
const saved = localStorage.getItem(key)
if (saved) {
  root.setAttribute('data-theme', saved)
}
const btn = document.getElementById('theme-toggle')
if (btn) {
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || ''
    const next = current === 'light' ? '' : 'light'
    if (next) root.setAttribute('data-theme', next)
    else root.removeAttribute('data-theme')
    localStorage.setItem(key, next)
  })
}
const yearEl = document.getElementById('year')
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear())
}

const projectLinks = document.querySelectorAll('.projects-grid .card .card-actions a')
projectLinks.forEach(a => {
  const text = a.textContent.trim().toLowerCase()
  const isRepo = text.includes('репозиторий')
  const isDemo = text.includes('демо')
  if (isRepo || isDemo) {
    a.setAttribute('aria-disabled', 'true')
    a.classList.add('disabled')
    a.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      alert(isRepo ? 'Репозиторий не доступен, попробуйте позднее' : 'Демо не доступен, попробуйте позднее')
    })
    a.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        alert(isRepo ? 'Репозиторий не доступен, попробуйте позднее' : 'Демо не доступен, попробуйте позднее')
      }
    })
  }
})
