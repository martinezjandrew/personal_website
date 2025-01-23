import './style.css'
import { load_aboutme_page, load_home_page, load_project_page } from './pages.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1> Andrew Martinez </h1>
    <h2> Programmer </h2>
  </div>
`

function createButton(label: string, loadPage: () => HTMLElement, pageId: string) {
  const button = document.createElement('button')
  button.innerHTML = label
  button.addEventListener("click", function() {
    if (!document.querySelector(`#${pageId}`)) {
      document.querySelectorAll('.page').forEach(page => page.remove())
      const page = loadPage()
      page.id = pageId
      page.classList.add('page')
      document.querySelector<HTMLDivElement>('#app')?.appendChild(page)
    }
  })
  return button
}

const homeButton = createButton('Home', load_home_page, 'home-page')
const aboutMeButton = createButton('About Me', load_aboutme_page, 'aboutme-page')
const projectsButton = createButton('Projects', load_project_page, 'project-page')

document.querySelector<HTMLDivElement>('#app')?.appendChild(homeButton)
document.querySelector<HTMLDivElement>('#app')?.appendChild(aboutMeButton)
document.querySelector<HTMLDivElement>('#app')?.appendChild(projectsButton)

const page = load_home_page()
page.id = 'home-page'
page.classList.add('page')
document.querySelector<HTMLDivElement>('#app')?.appendChild(page)