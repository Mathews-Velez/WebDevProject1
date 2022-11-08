document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Initailize the empty projects json array that will be used to populate the table
    const projects = [];
    let isLocalLoaded = false;

    //check if projects in present in local storage otherwise add one to it
    if (window.localStorage.getItem("projects") == null) {
      console.log(
        "No projects in local storage, adding one to local storage...."
      );
      window.localStorage.setItem("projects", []);
    }

    // Get the element for the eventlistener
    const input = document.querySelectorAll("form input");
    const textarea = document.querySelector("form textarea");

    // methods that interact with local storage
    //write to local storage(overwrite)
    function overWriteToLocalStorage() {
      console.log("Overwriting local storage of projects");
      window.localStorage.setItem("projects", JSON.stringify(projects));
      // console.log(localStorage.getItem("projects"));
    }

    //load local storage
    function loadLocalStorage() {
      //get the project array
      if (window.localStorage.getItem("projects") == "") {
        console.log("Local storage is currently empty");
      } else {
        console.log("Loading local storage project array into table");
        let lprojects = JSON.parse(window.localStorage.getItem("projects"));
        for (let i = 0; i < lprojects.length; i++) {
          projects.push(lprojects[i]);
          // console.log(lprojects[i])
        }
        //refresh the table after loading the local storage data into the projects array
        populateTable();
        isLocalLoaded = true;
      }
    }

    //append to local storage
    function addToLocalStorage() {
      //check if local storage was called
      if (isLocalLoaded) {
        console.log("Local storage was loaded");
        //if it was, clear the local storage
        console.log("Clearing local storage");
        clearLocalStorage();
        //then add the updated array to local storage
        console.log("Updating local storage");
        overWriteToLocalStorage();
      } else{
        //if local storage was not added to the projects array, we add it. but dont populate the table
        let lprojects = JSON.parse(window.localStorage.getItem("projects"));
        for (let i = 0; i < lprojects.length; i++) {
          projects.push(lprojects[i]);
        }
        //now that we have projects array updated with the local storage array of projects we can clear and then add the new array to local storage
        console.log("local projects array has been updated with local storage");
        clearLocalStorage();
        overWriteToLocalStorage();
        
      }
      //get the local array of project
      let lprojects = JSON.parse(window.localStorage.getItem("projects")); //append the session array to the local storage array
      //iterate through every obj in projects array, if the object exists in the local version
      // lprojects.push(projects[i]);
      console.log(lprojects);
      window.localStorage.setItem("projects", JSON.stringify(lprojects));
    }

    //empty local storage
    function clearLocalStorage() {
      console.log("Clearing local storage...");
      window.localStorage.setItem("projects", []);
    }

    // Call the validate function once to initialize the style
    validateForm();
    populateTable();
    // Add the eventlistener to the form to validate
    input.forEach((input) => {
      input.addEventListener("focusout", validateForm);
    });
    textarea.addEventListener("focusout", validateForm);

    //populates the table with the projects array
    function populateTable() {
      console.log("generating table");
      //remove the table completely
      document.querySelector("#oniSucksTableOverflow").innerHTML = "";
      //add a new empty table
      const tableDiv = document.querySelector("#oniSucksTableOverflow");
      tableDiv.innerHTML = `<table>
       <tr id="tableHead">
         <th id="tableProject">Project id</td>
         <th id="tableOwner">Owner</td>
         <th id="tableTitle">Title</td>
         <th id="tableCategory">Category</td>
         <th id="tableStatus">Status</td>
         <th id="tableHours">Hours</td>
         <th id="tableRate">Rate</td>
         <th id="tableDescription">Description</td>
         <th id="tableEdit">Edit</td>
         <th id="tableDelete">Delete</td>
       </tr>
     </table>`;

      const table = document.querySelector("table");
      for (let i = 0; i < projects.length; i++) {
        // console.log("Reading object at index: " + i);
        //make a new tr elementType
        const row = document.createElement("tr");
        //for each tdClass
        for (let j = 0; j < Object.values(projects[i]).length; j++) {
          // make a new td with the tdClass as the td class and the value to be the value pair of the key "tdClass"
          const column = document.createElement("td");
          column.className = Object.keys(projects[i])[j];
          column.innerHTML = Object.values(projects[i])[j];
          //add the td to the row
          row.appendChild(column);
        }
        // console.log("added a new row");
        table.appendChild(row);
      }
    }

    // Add a row to the table
    function addProject() {
      //get the json object from the form
      const formAnswer = getFormInfo();
      //add it to the table
      projects.push(formAnswer);
      // console.log("added a new project");
      //rerender the table with the new values
      populateTable();
      console.log(projects);
    }

    function removeProject(e) {}
    // Get the value from the form and return it
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
        .querySelector("textarea").value;
      project.tableEdit = `<img class="edit" src="images/edit.svg">`;
      project.tableDelete = `<img class="delete" src="images/trash.svg">`;
      return project;
    }

    // Does all the form validation
    function validateForm() {
      // Get the add Button
      const addButton = document.getElementById("addButton");

      // Initialise all form fields
      const project = document.getElementById("project").querySelector("input");
      const owner = document.getElementById("owner").querySelector("input");
      const title = document.getElementById("title").querySelector("input");
      const category = document
        .getElementById("category")
        .querySelector("select");
      const hours = document.getElementById("hours").querySelector("input");
      const rate = document.getElementById("rate").querySelector("input");
      const status = document.getElementById("status").querySelector("select");
      const description = document
        .getElementById("description")
        .querySelector("textarea");

      // Initialise all p fields of the form
      const pProject = document.getElementById("project").querySelector("p");
      const pOwner = document.getElementById("owner").querySelector("p");
      const pTitle = document.getElementById("title").querySelector("p");
      const pCategory = document.getElementById("category").querySelector("p");
      const pHours = document.getElementById("hours").querySelector("p");
      const pRate = document.getElementById("rate").querySelector("p");
      const pStatus = document.getElementById("status").querySelector("p");
      const pDescription = document
        .getElementById("description")
        .querySelector("p");

      // Initialise the regex object for the form fields
      const REGEX = {
        alphanumeric: /^[A-Za-z0-9]*$/,
        alpha: /^[A-Za-z]*$/,
        numeric: /^[0-9]*$/,
        category: /[Pp]ract|[Tt]heory|[Ff]und [Rr]es/,
        status: /[Pp]lanned|[Cc]ompleted|[Oo]ngoing/,
        empty: /^$/,
      };

      // Separate the field by type of validation
      const alphanumericElements = [project, title, description];
      const alphaElements = [owner];
      const numericElements = [hours, rate];
      const empty = [
        project,
        title,
        description,
        owner,
        hours,
        rate,
        category,
        status,
      ];

      // Inisialize field for each type of validation
      let alphanumericBoolean = false;
      let alphaBoolean = false;
      let numericBoolean = false;
      let emptyBoolean = false;

      // Take care of the popup that shows when something is wrong
      if (!REGEX.alphanumeric.test(project.value)) {
        pProject.style.border = "1px red dashed";
        errorPopupShow(project.parentElement);
      } else {
        pProject.style.border = "";
        errorPopupHide(project.parentElement);
      }
      if (!REGEX.alpha.test(owner.value)) {
        pOwner.style.border = "1px red dashed";
        errorPopupShow(owner.parentElement);
      } else {
        pOwner.style.border = "";
        errorPopupHide(owner.parentElement);
      }
      if (!REGEX.alphanumeric.test(title.value)) {
        pTitle.style.border = "1px red dashed";
        errorPopupShow(title.parentElement);
      } else {
        pTitle.style.border = "";
        errorPopupHide(title.parentElement);
      }
      if (!REGEX.category.test(category.value)) {
        pCategory.style.border = "1px red dashed";
        errorPopupShow(category.parentElement);
      } else {
        pCategory.style.border = "";
        errorPopupHide(category.parentElement);
      }
      if (!REGEX.numeric.test(hours.value)) {
        pHours.style.border = "1px red dashed";
        errorPopupShow(hours.parentElement);
      } else {
        pHours.style.border = "";
        errorPopupHide(hours.parentElement);
      }
      if (!REGEX.numeric.test(rate.value)) {
        pRate.style.border = "1px red dashed";
        errorPopupShow(rate.parentElement);
      } else {
        pRate.style.border = "";
        errorPopupHide(rate.parentElement);
      }
      if (!REGEX.status.test(status.value)) {
        pStatus.style.border = "1px red dashed";
        errorPopupShow(status.parentElement);
      } else {
        pStatus.style.border = "";
        errorPopupHide(status.parentElement);
      }
      if (description.value == null) {
        pDescription.style.border = "1px red dashed";
        errorPopupShow(description.parentElement);
      } else {
        pDescription.style.border = "";
        errorPopupHide(description.parentElement);
      }
      // Validate every field in the form
      if (
        alphanumericElements.every((element) =>
          REGEX.alphanumeric.test(element.value)
        )
      ) {
        alphanumericBoolean = true;
      }
      if (alphaElements.every((element) => REGEX.alpha.test(element.value))) {
        alphaBoolean = true;
      }
      if (
        numericElements.every((element) => REGEX.numeric.test(element.value))
      ) {
        numericBoolean = true;
      }
      if (empty.some((element) => REGEX.empty.test(element.value))) {
        emptyBoolean = true;
      }
      // If every field in the form are correct then let the add button be pressed and call the addProject function
      if (
        alphanumericBoolean &&
        alphaBoolean &&
        numericBoolean &&
        !emptyBoolean
      ) {
        addButton.style.backgroundColor = "";
        addButton.addEventListener("mousedown", addProject);
        // Else remove the eventlistener on the add button and make it gray
      } else {
        addButton.removeEventListener("mousedown", addProject);
        addButton.style.backgroundColor = "gray";
      }
    }

    // Show the popup
    function errorPopupShow(element) {
      element
        .querySelector(".popupIndication")
        .classList.replace("hide", "show");
    }

    // Hide the popup
    function errorPopupHide(element) {
      element
        .querySelector(".popupIndication")
        .classList.replace("show", "hide");
    }

    // deleteImg.forEach((element) => {
    //   element.removeEventListener('click',removeRow)
    //   element.addEventListener('click',removeRow)
    // })
    document
      .getElementById("write")
      .addEventListener("click", overWriteToLocalStorage);
    document
      .getElementById("append")
      .addEventListener("click", addToLocalStorage);
    document
      .getElementById("clear")
      .addEventListener("click", clearLocalStorage);
    document.getElementById("load").addEventListener("click", loadLocalStorage);
  },
  false
);
