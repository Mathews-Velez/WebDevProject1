document.addEventListener('DOMContentLoaded', function () {

  // Get all image
  const deleteImg = document.querySelectorAll('.delete')
  const editImg = document.querySelectorAll('.edit')
  const saveImg = document.querySelectorAll('.save')

  // Add eventlistener to all image
  deleteImg.forEach((element) => element.addEventListener('click',deleteRow))
  editImg.forEach((element) => element.addEventListener('click',editRow))
  saveImg.forEach((element) => element.addEventListener('click',saveRow))

  // Delete row of the target
  function deleteRow(event) {
    const row = event.target.parentElement.parentElement
    row.remove()
  }

  // Edit the target row
  function editRow(event) {
    // Variable declaration
    const row = event.target.parentElement.parentElement
    const td = row.querySelectorAll('td')
    const editImg = row.querySelector('.edit')
    let content = []

    // Get the text in each col
    td.forEach((element) => content.push(element.textContent))

    // Add a input field with the value of the previous text
    for (let i = 0; i < content.length-2; i++) {
      td[i].textContent = ''
      td[i].appendChild(document.createElement('input'))
      td[i].querySelector('input').value = content[i]
    }

    // Change the image for the save image and its class
    editImg.classList.replace('edit','save')
    editImg.src = 'images/device-floppy.svg'

    // Change the event on the target
    event.target.removeEventListener('click',editRow)
    event.target.addEventListener('click',saveRow)
  }

  // Save the target row
  function saveRow(event) {
    // Variable declaration
    const row = event.target.parentElement.parentElement
    const td = row.querySelectorAll('td')
    const input = row.querySelectorAll('input')
    const saveImg = row.querySelector('.save')
    let content = []

    // Get the text in each col
    input.forEach((element) => content.push(element.value))

    // Replace input field with the text of the input value
    for (let i = 0; i < content.length; i++) {
      td[i].innerHTML = ''
      td[i].textContent = content[i]
    }
    // Change the image for the edit image and its class
    saveImg.classList.replace('save','edit')
    saveImg.src = 'images/edit.svg'
    
    // Change the event on the target
    event.target.removeEventListener('click',saveRow)
    event.target.addEventListener('click',editRow)
  }
},false)