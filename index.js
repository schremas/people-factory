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
    const ul = document.createElement('ul')
    const name = document.createElement('li')
    const color = document.createElement('li')
    const yrs = document.createElement('li')
    const birth = document.createElement('li')
        
    name.innerHTML = `Name: ${personName}`
    color.innerHTML = `Hair Color: ${hairColor}`
    yrs.innerHTML = `Age: ${age}`
    birth.innerHTML = `Birthplace: ${birthplace}`

    details.appendChild(ul)
    ul.appendChild(name)
    ul.appendChild(color)
    ul.appendChild(yrs)
    ul.appendChild(birth)

   //  details.innerHTML = `
   //     <ul>
   //         <li>Name: ${personName}</li>
   //         <li>Hair Color: ${hairColor}</li>
   //         <li>Age: ${age}</li>
   //         <li>Birthplace: ${birthplace}</li>
   //     </ul>
   `
}

personForm.addEventListener('submit', handleSubmit)
