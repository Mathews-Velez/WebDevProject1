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
      const tdClass = Object.keys(projects[0]);
      console.log(tdClass);
      for (let i = 0; i < projects.length; i++) {
        
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
      }
    }
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
