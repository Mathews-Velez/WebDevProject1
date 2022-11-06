document.addEventListener('DOMContentLoaded', function () {

  // Add the eventlistener to the reset button
  document.getElementById('resetButton').addEventListener('click', resetForm)

  // Reset the form fields to their default value
  function resetForm() {
    document.getElementById('project').querySelector('input').value = ""
    document.getElementById('owner').querySelector('input').value = ""
    document.getElementById('title').querySelector('input').value = ""
    document.getElementById('category').querySelector('select').options = "Pract"
    document.getElementById('hours').querySelector('input').value = ""
    document.getElementById('rate').querySelector('input').value = ""
    document.getElementById('status').querySelector('select').options = "Planned"
    document.getElementById('description').querySelector('textarea').innerHTML = ""
  }
},false)