document.addEventListener('DOMContentLoaded', function () {

  // Get the query input
  const query = document.getElementById('query')

  // Add eventlistener on the query input field
  query.addEventListener('focusin',removeQueryText)
  query.addEventListener('focusout',checkIfEmpty)
  query.addEventListener('input',queryFromTable)

  // Call getEverythingFromTable with the input of the query
  function queryFromTable() {
    const querySearch = query.value
    getEverythingFromTable(querySearch)
  }

  // search for matching row
  function getEverythingFromTable(search) {
    // Declare variables
    const tr = document.querySelectorAll('tr')
    let j = 0

    // Iterate through tr to get every td from every tr
    tr.forEach((element) => {
    // Declare variables
      let isPresent = false
      const td = element.querySelectorAll('td')

      // Test every td to see if they match the query search
      td.forEach((element) => {
        if (RegExp(search).test(element.textContent)) {
          isPresent = true
        }
      })

      // If the query is false for row except from head hide else show
      if (j > 0 && !isPresent) {
        element.style.display = 'none'
      } else {
        element.style.display = ''
      }

      j++
    })
  }

  // Remove the Enter your query text
  function removeQueryText() {
    if (query.value == 'Enter your query') {
      query.value = ''
    }
  }

  // If empty add the Enter your query text
  function checkIfEmpty() {
    if (query.value == '') {
      query.value = 'Enter your query'
    }
  }
},false)