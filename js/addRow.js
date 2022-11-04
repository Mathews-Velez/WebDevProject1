document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('addButton').addEventListener('click', addProject)
  
  function addProject() {
    const table = document.querySelector('table')
    const row = document.createElement('tr')
    row.className = 'rowSaved'
    const tdClass = ['tableProject','tableOwner','tableTitle','tableCatagory','tableStatus','tableHours','tableRate','tableDescription','tableEdit','tableDelete']
    const formAnswer = getFormInfo()
    let i = 0

    tdClass.forEach(element => {
      const td = document.createElement('td')
      td.className = element
      if (i < formAnswer.length) {
        td.innerHTML = formAnswer[i]
      }
      row.appendChild(td)
      i++
    })
    
    table.appendChild(row)
  }

  function getFormInfo() {
    const formAnswer = ["","","","","","","",""]
    formAnswer[0] = document.getElementById('project').querySelector('input').value
    formAnswer[1] = document.getElementById('owner').querySelector('input').value
    formAnswer[2] = document.getElementById('title').querySelector('input').value
    formAnswer[3] = document.getElementById('category').querySelector('select').value
    formAnswer[4] = document.getElementById('hours').querySelector('input').value
    formAnswer[5] = document.getElementById('rate').querySelector('input').value
    formAnswer[6] = document.getElementById('status').querySelector('select').value
    formAnswer[7] = document.getElementById('description').querySelector('textarea').innerHTML

    return formAnswer
  }
},false)

