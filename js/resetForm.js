document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('resetButton').addEventListener('click', resetForm)
  
    function resetForm() {
      document.getElementById('project').querySelector('input').value = ""
      document.getElementById('owner').querySelector('input').value = ""
      document.getElementById('title').querySelector('input').value = ""
      document.getElementById('category').querySelector('select').value = ""
      document.getElementById('hours').querySelector('input').value = ""
      document.getElementById('rate').querySelector('input').value = ""
      document.getElementById('status').querySelector('select').value = ""
      document.getElementById('description').querySelector('textarea').innerHTML = ""
    }
  },false)