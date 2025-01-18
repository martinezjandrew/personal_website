export function load_project_page(): HTMLElement {
    const page = document.createElement('div')

    page.innerHTML = `
        <h1>Projects</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pfdZyTuQRrk?si=9JmBLIJdISqrMW0V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `

    page.id = 'project-page'
    page.className = 'page'
    
    return page
}

export function load_home_page(): HTMLElement {
    const page = document.createElement('div')

    page.innerHTML = `
        <h1>Home</h1>
    `

    page.id = 'home-page'
    page.className = 'page'
    
    return page
}


export function load_aboutme_page(): HTMLElement {
    const page = document.createElement('div')

    page.innerHTML = `
        <h1>About Me</h1>
    `

    page.id = 'aboutme-page'
    page.className = 'page'
    
    return page
}