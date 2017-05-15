const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = form.personName.value

    // details.innerHTML = `<em>${personName}</em>`

    // const em = document.createElement('em')
    // em.textContent = personName
    // details.appendChild(em)

    const colorDiv = `
        <div style="height: 50px; wodth: 100px; background-color: ${hairColor}"></div>
    `

    details.innerHTML = `
        <ul>
            <li>Name: ${personName}</li>
            <li>Hair Color: ${hairColor}</li>
            <li>Age: ${age}</li>
            <li>Birthplace: ${birthplace}</li>
        </ul>
    `
    
}

personForm.addEventListener('submit', handleSubmit)
