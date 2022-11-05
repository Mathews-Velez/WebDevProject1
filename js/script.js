document.addEventListener("DOMContentLoaded", function () {
    projects = {}
    
    
    document.getElementById('addButton').addEventListener('click', populateTable)
    function populateTable(){
        const table = document.querySelector('table')
        let projectObj = getFormInfo();

    }
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
      const project={}; 
      project.project = document.getElementById('project').querySelector('input').value
      project.owner = document.getElementById('owner').querySelector('input').value
      project.title = document.getElementById('title').querySelector('input').value
      project.category = document.getElementById('category').querySelector('select').value
      project.hours = document.getElementById('hours').querySelector('input').value
      project.rate = document.getElementById('rate').querySelector('input').value
      project.status = document.getElementById('status').querySelector('select').value
      project.description = document.getElementById('description').querySelector('textarea').innerHTML
      console.log(document.getElementById('description').querySelector('textarea').value)
      return project;
    }
},false );