document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Initailize the empty projects json array that will be used to populate the table
    //each project object will habe a property called state that will be used by populateTable to know
    const projects = [
      {
        tableProject: "1",
        tableOwner: "owner",
        tableTitle: "title",
        tableCategory: "category",
        tableStatus: "completed",
        tableHours: "6",
        tableRate: "7",
        tableDescription: "This is the description for the project",
      },
      {
        tableProject: "3",
        tableOwner: "john",
        tableTitle: "Fight a tiger",
        tableCategory: "fund res",
        tableStatus: "ongoing",
        tableHours: "1",
        tableRate: "10",
        tableDescription: "Prove who the alpha male is",
      },
    ];

    document
      .getElementById("addButton")
      .addEventListener("click", populateTable);


    function populateTable() {
      const table = document.querySelector("table");
      // for each object in projects
      // console.log(projects[0].tableDescription)
      for (let i = 0; i < projects.length; i++) {
        //make a new tr elementType
        const row = document.createElement('tr')
        //for each tdClass
        for (let j = 0; j < Object.values(projects[i]).length;j++){      
           // make a new td with the tdClass as the td class and the value to be the value pair of the key "tdClass"
           const column = document.createElement('td')
           column.className = Object.keys(projects[i])[j]
           column.innerHTML = Object.values(projects[i])[j]
           if column.className 
           console.log("adding column "+ Object.keys(projects[i])[j])
           row.appendChild(column)
           console.log(row)
        }
      console.log("added a new row")
      table.appendChild(row)
      }
    }
    populateTable()
      
      //       make a new td with the tdClass as the td class and the value to be the value pair of the key "tdClass"
       //       add the td to the row
      //     }
      //  }

      // const tdClass = Object.keys(projects[0]);
      // console.log(tdClass);
      // for (let i = 0; i < projects.length; i++) {
      //  tdClass.forEach( elementType => {
      //   const td = document.createElement('td')
      //   td.className = elementType


      //  })
       
        // tdClass.forEach(element => {
        //   const td = document.createElement('td')
        //   td.className = element
        //   if (i < formAnswer.length) {
        //     td.innerHTML = formAnswer[i]
        //   }
        //   row.appendChild(td)
        //   i++
        // })
        // table.appendChild(row)
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
      let i = 0;
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
      console.log(
        document.getElementById("description").querySelector("textarea").value
      );
      return project;
    }
  },
  false
);
