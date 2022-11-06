document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Initailize the empty projects json array that will be used to populate the table
    //each project object will habe a property called state that will be used by populateTable to know
    const projects = [
      
    ];

    document
      .getElementById("addButton")
      .addEventListener("click", populateTable);

    function populateTable() {
      const table = document.querySelector("table");
      // for each object in projectss
      for (let i = 0; i < projects.length; i++) {
        //make a new tr elementType
        const row = document.createElement("tr");
        //for each tdClass
        for (let j = 0; j < Object.values(projects[i]).length; j++) {
          // make a new td with the tdClass as the td class and the value to be the value pair of the key "tdClass"
          const column = document.createElement("td");
          column.className = Object.keys(projects[i])[j];
          if (column.className.includes(""))
          column.innerHTML = Object.values(projects[i])[j];

          console.log("adding column " + Object.keys(projects[i])[j]);
          //add the td to the row
          row.appendChild(column);
          console.log(row);
        }
        console.log("added a new row");
        table.appendChild(row);
      }
    }
    populateTable();

    function addProject() {
      const table = document.querySelector("table");
      const row = document.createElement("tr");
      row.className = "rowSaved";
      const tdClass = [
        "tableProject",
        "tableOwner",
        "tableTitle",
        "tableCatagory",
        "tableStatus",
        "tableHours",
        "tableRate",
        "tableDescription",
        "tableEdit",
        "tableDelete",
      ];
      const formAnswer = getFormInfo();
      
    }

    function getFormInfo() {
      const project = {};
      project.project = document
        .getElementById("project")
        .querySelector("input").value;
      project.owner = document
        .getElementById("owner")
        .querySelector("input").value;
      project.title = document
        .getElementById("title")
        .querySelector("input").value;
      project.category = document
        .getElementById("category")
        .querySelector("select").value;
      project.hours = document
        .getElementById("hours")
        .querySelector("input").value;
      project.rate = document
        .getElementById("rate")
        .querySelector("input").value;
      project.status = document
        .getElementById("status")
        .querySelector("select").value;
      project.description = document
        .getElementById("description")
        .querySelector("textarea").innerHTML;
      ;
      project.tableEdit = `<img class="edit" src="images/edit.svg">`
      project.tableDelete = `<img class="delete" src="images/delete.svg">`
      return project;
    }
  },
  false
);
