document.addEventListener('DOMContentLoaded', function () {
  // Get the element for the eventlistener
  const input = document.querySelectorAll('form input')
  const textarea = document.querySelector('form textarea')

  // Call the validate function once to inisialise the style
  validateForm()
  // Add the eventlistener to the form to validate
  input.forEach((input) => {
    input.addEventListener('focusout', validateForm)
  })
  textarea.addEventListener('focusout', validateForm)

  // Add a row to the table
  function addProject() {
    // Inisialize the variable needed for the function
    const table = document.querySelector('table')
    const row = document.createElement('tr')
    row.className = 'rowSaved'
    const tdClass = ['tableProject','tableOwner','tableTitle','tableCatagory','tableStatus','tableHours','tableRate','tableDescription','tableEdit','tableDelete']
    const formAnswer = getFormInfo()
    let i = 0

    // Create all the td that go in the tr with the field from the form
    tdClass.forEach(element => {
      const td = document.createElement('td')
      td.className = element
      if (i < formAnswer.length) {
        td.innerHTML = formAnswer[i]
      } else if (i == formAnswer.length) {
        td.innerHTML = `<img class="edit" src="images/edit.svg">`
      } else {
        td.innerHTML = `<img class="delete" src="images/trash.svg">`
      }
      row.appendChild(td)
      i++
    })

    // Add the row
    table.appendChild(row)
  }
  
  // Get the value from the form and return it
  function getFormInfo() {
    const formAnswer = ["","","","","","","",""]
    formAnswer[0] = document.getElementById('project').querySelector('input').value
    formAnswer[1] = document.getElementById('owner').querySelector('input').value
    formAnswer[2] = document.getElementById('title').querySelector('input').value
    formAnswer[3] = document.getElementById('category').querySelector('select').value
    formAnswer[4] = document.getElementById('hours').querySelector('input').value
    formAnswer[5] = document.getElementById('rate').querySelector('input').value
    formAnswer[6] = document.getElementById('status').querySelector('select').value
    formAnswer[7] = document.getElementById('description').querySelector('textarea').value

    return formAnswer
  }

  // Does all the form validation
  function validateForm() {
    // Get the add Button
    const addButton = document.getElementById('addButton')

    // Initialise all form fields
    const project = document.getElementById('project').querySelector('input')
    const owner = document.getElementById('owner').querySelector('input')
    const title = document.getElementById('title').querySelector('input')
    const category = document.getElementById('category').querySelector('select')
    const hours = document.getElementById('hours').querySelector('input')
    const rate = document.getElementById('rate').querySelector('input')
    const status = document.getElementById('status').querySelector('select')
    const description = document.getElementById('description').querySelector('textarea')

    // Initialise all p fields of the form
    const pProject = document.getElementById('project').querySelector('p')
    const pOwner = document.getElementById('owner').querySelector('p')
    const pTitle = document.getElementById('title').querySelector('p')
    const pCategory = document.getElementById('category').querySelector('p')
    const pHours = document.getElementById('hours').querySelector('p')
    const pRate = document.getElementById('rate').querySelector('p')
    const pStatus = document.getElementById('status').querySelector('p')
    const pDescription = document.getElementById('description').querySelector('p')

    // Initialise the regex object for the form fields
    const REGEX = {
      'alphanumeric':/^[A-Za-z0-9]*$/,
      'alpha':/^[A-Za-z]*$/,
      'numeric':/^[0-9]*$/,
      'category':/[Pp]ract|[Tt]heory|[Ff]und [Rr]es/,
      'status':/[Pp]lanned|[Cc]ompleted|[Oo]ngoing/,
      'empty':/^$/
    }

    // Separate the field by type of validation
    const alphanumericElements = [project,title,description]
    const alphaElements = [owner]
    const numericElements = [hours,rate]
    const empty = [project,title,description,owner,hours,rate,category,status]

    // Inisialize field for each type of validation
    let alphanumericBoolean = false
    let alphaBoolean = false
    let numericBoolean = false
    let emptyBoolean = false

    // Take care of the popup that shows when something is wrong
    if (!REGEX.alphanumeric.test(project.value)) {
      pProject.style.border = '1px red dashed'
      errorPopupShow(project.parentElement)
    } else {
      pProject.style.border = ''
      errorPopupHide(project.parentElement)
    }
    if (!REGEX.alpha.test(owner.value)) {
      pOwner.style.border = '1px red dashed'
      errorPopupShow(owner.parentElement)
    } else {
      pOwner.style.border = ''
      errorPopupHide(owner.parentElement)
    }
    if (!REGEX.alphanumeric.test(title.value)) {
      pTitle.style.border = '1px red dashed'
      errorPopupShow(title.parentElement)
    } else {
      pTitle.style.border = ''
      errorPopupHide(title.parentElement)
    }
    if (!REGEX.category.test(category.value)) {
      pCategory.style.border = '1px red dashed'
      errorPopupShow(category.parentElement)
    } else {
      pCategory.style.border = ''
      errorPopupHide(category.parentElement)
    }
    if (!REGEX.numeric.test(hours.value)) {
      pHours.style.border = '1px red dashed'
      errorPopupShow(hours.parentElement)
    } else {
      pHours.style.border = ''
      errorPopupHide(hours.parentElement)
    }
    if (!REGEX.numeric.test(rate.value)) {
      pRate.style.border = '1px red dashed'
      errorPopupShow(rate.parentElement)
    } else {
      pRate.style.border = ''
      errorPopupHide(rate.parentElement)
    }
    if (!REGEX.status.test(status.value)) {
      pStatus.style.border = '1px red dashed'
      errorPopupShow(status.parentElement)
    } else {
      pStatus.style.border = ''
      errorPopupHide(status.parentElement)
    }
    if (!REGEX.alphanumeric.test(description.value)) {
      pDescription.style.border = '1px red dashed'
      errorPopupShow(description.parentElement)
    } else {
      pDescription.style.border = ''
      errorPopupHide(description.parentElement)
    }

    // Validate every field in the form
    if (alphanumericElements.every(element => REGEX.alphanumeric.test(element.value))) {
      alphanumericBoolean = true
    }
    if (alphaElements.every(element => REGEX.alpha.test(element.value))) {
      alphaBoolean = true
    }
    if (numericElements.every(element => REGEX.numeric.test(element.value))) {
      numericBoolean = true
    }
    if (empty.some(element => REGEX.empty.test(element.value))) {
      emptyBoolean = true
    }

    // If every field in the form are correct then let the add button be pressed and call the addProject function
    if (alphanumericBoolean && alphaBoolean && numericBoolean && !emptyBoolean) {
      addButton.style.backgroundColor = ''
      addButton.addEventListener('mousedown', addProject)
      // Else remove the eventlistener on the add button and make it gray
    } else {
      addButton.removeEventListener('mousedown', addProject)
      addButton.style.backgroundColor = 'gray'
    }
  }

  // Show the popup
  function errorPopupShow(element) {
    element.querySelector('.popupIndication').classList.replace('hide','show')
  }

  // Hide the popup
  function errorPopupHide(element) {
    element.querySelector('.popupIndication').classList.replace('show','hide')
  }
},false)