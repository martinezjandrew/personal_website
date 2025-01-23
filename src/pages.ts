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
        <p>Hi, I'm Andrew Martinez and welcome to my website!</p>
        <p> Here you can find information about me and the projects I've worked on personally and for school.</p>
        <p> You can find me on my <a href="https://www.linkedin.com/in/andrew-joseph-martinez/">LinkedIn</a></p>
        <p> You can view my projects at my <a href="https://github.com/martinezjandrew">GitHub</a></p>
        <p> If you need to contact me, you can reach me at <a href="mailto:martinezjandrew@gmail.com">martinezjandrew@gmail.com</a></p>
    `

    page.id = 'home-page'
    page.className = 'page'
    
    return page
}

function make_education_card(title_name: string, degree_name: string, location_name: string, start_date: string, graduation_date: string): HTMLElement {
    const card = document.createElement('div')

    const title = document.createElement('h3')
    title.textContent = title_name
    title.className = 'card-title'

    const degree = document.createElement('p')
    degree.textContent = degree_name
    degree.className = 'card-degree'

    const location = document.createElement('p')
    location.textContent = location_name
    location.className = 'card-location'
    
    const dates = document.createElement('p')
    dates.textContent = start_date + ' to ' + graduation_date
    dates.className = 'card-dates'


    card.appendChild(title)
    card.appendChild(degree)
    card.appendChild(location)
    card.appendChild(dates)

    card.className = 'education-card'

    return card
}

function make_experience_card(employer_name: string, location_name: string, position_name: string, start_date: string, end_date: string, bullet_points: string[]): HTMLElement {
    const card = document.createElement('div')

    const title = document.createElement('h3')
    title.textContent = employer_name
    title.className = 'card-title'

    const location = document.createElement('p')
    location.textContent = location_name
    location.className = 'card-location'

    const position = document.createElement('p')
    position.textContent = position_name
    position.className = 'card-position'

    const dates = document.createElement('p')
    dates.textContent = start_date + ' to ' + end_date
    dates.className = 'card-dates'

    const description = document.createElement('p')
    description.textContent = bullet_points.join('\n')
    description.className = 'card-description'

    card.appendChild(title)
    card.appendChild(location)
    card.appendChild(position)
    card.appendChild(dates)
    card.appendChild(description)

    card.className = 'experience-card'

    return card
}

export function load_aboutme_page(): HTMLElement {
    const page = document.createElement('div')

    page.id = 'aboutme-page'
    page.className = 'page'

    const education_section = document.createElement('div')
    education_section.className = 'section'
    education_section.innerHTML = '<h2>Education</h2>'
    education_section.appendChild(make_education_card(
        'St. Edward\'s University',
        'Bachelor of Science in Computer Science',
        'Austin, TX',
        'August 2022',
        'December 2025'
    ))
    education_section.appendChild(make_education_card(
        'Austin Community College',
        'Associate of Applied Science with Cybersecurity Specialization',
        'Austin, TX',
        'August 2020',
        'August 2022'
    ))

    page.appendChild(education_section)

    const experience_section = document.createElement('div')
    experience_section.className = 'section'
    experience_section.innerHTML = '<h2>Experience</h2>'
    experience_section.appendChild(make_experience_card(
        'St. Edward\'s University',
        'Austin, TX',
        'Software Programming Associate',
        'August 2024',
        'Present',
        [
            'Designed an efficient automated solution using Boomi Integrate which not only updated outdated office records but also reduced time wasted on manual checks.',
            'Created a user-friendly interface using Boomi Flow and Boomi Integrate to streamline a business process to update a course\'s instructor, improving efficiency for Deans.',
            'Developed a scalable and interactive Grafana dashboard to provide system administrators with real-time visibility into key server performance metrics, such as memory utilization, CPU use, and file space.'
        ]
    ))
    experience_section.appendChild(make_experience_card(
        'St. Edward\'s University',
        'Austin, TX',
        'A/V Specialist',
        'August 2022',
        'August 2024',
        [
            'Upgraded 80 classrooms with new equipment, including 80 desktops, 50 projectors, and 80 remotes, enhancing the learning environment and improving technology reliability.',
            'Configured and developed new laptops and desktops (Dell and Apple) for 50 faculty and staff members, ensuring seamless integration with institutional policies and software.',
            'Resolved 90% of classroom technical issues within 1 hour, minimizing disruptions to classes and ensuring timely resolution of technical difficulties.',
            'Closed 100+ technical support requests, providing timely and effective support to faculty, staff, and students.'
        ]
    ))
    experience_section.appendChild(make_experience_card(
        'Pathways at the Housing Authority of the City of Austin',
        'Austin, TX',
        'IT Contractor',
        'December 2021',
        'August 2022',
        [
            'Lead a team of 8 IT interns from ACC by assigning tasks, monitoring productivity, and offering guidance and multitasking assistance with multiple interns',
            'Prepared, planned, and executed the distribution of computer devices (desktops and laptops) for 5 events and assisted setting up 16 recipients with their devices',
            'Provided computer training to 6 HACA residents with little to no experience using a computer',
            'Maintained HACA presence during the installation of Google Fiber at a HACA property performed by Google Fiber contractors',
            'Performed remote technical support to residents to resolve errors with their computers, network issues they have with their telecommunications provider'
        ]
    ))
    experience_section.appendChild(make_experience_card(
        'Austin Community College - HACA Connect 15.0 Intern',
        'Austin, TX',
        'Work-Study Intern',
        'July 2021',
        'August 2021',
        [
            'Reimaged 50 computers for reuse within the department.',
            'Assisted in troubleshooting an office-wide shutdown of computers due to a faulty Windows update.',
            'Assisted in the acquisition of new computers for the department.'
        ]
    ))    

    page.appendChild(experience_section)
    return page
}