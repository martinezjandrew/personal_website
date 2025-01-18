import './style.css'
import { load_aboutme_page, load_home_page, load_project_page } from './pages.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1> Andrew Martinez </h1>
    <h2> Programmer </h2>
  </div>
`

const home = document.createElement('button')
home.innerHTML = 'Home'
home.addEventListener("click", function() {
  document.querySelector<HTMLDivElement>('#project-page')?.remove()
  document.querySelector<HTMLDivElement>('#aboutme-page')?.remove()
  document.querySelector<HTMLDivElement>('#app')?.appendChild(load_home_page())
})

const aboutme = document.createElement('button')
aboutme.innerHTML = 'About Me'
aboutme.addEventListener("click", function() {
  document.querySelector<HTMLDivElement>('#project-page')?.remove()
  document.querySelector<HTMLDivElement>('#home-page')?.remove()
  document.querySelector<HTMLDivElement>('#app')?.appendChild(load_aboutme_page())
})

const projects = document.createElement('button')
projects.innerHTML = 'Projects'
projects.addEventListener("click", function() {
  document.querySelector<HTMLDivElement>('#aboutme-page')?.remove()
  document.querySelector<HTMLDivElement>('#home-page')?.remove()
  document.querySelector<HTMLDivElement>('#app')?.appendChild(load_project_page())
})

document.querySelector<HTMLDivElement>('#app')?.appendChild(home)
document.querySelector<HTMLDivElement>('#app')?.appendChild(aboutme)
document.querySelector<HTMLDivElement>('#app')?.appendChild(projects)
