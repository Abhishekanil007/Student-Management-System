const tbody = document.querySelector("tbody");

const form = document.querySelector("form");

function addEmployee(employee){
    // takes an employee object and store it in the table
    const tr = document.createElement("tr");

    for(let key in employee)
    {
        const td = document.createElement("td");
        td.innerText = employee[key];
        tr.appendChild(td);
    }
    const options = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    options.appendChild(deleteButton);

    tr.appendChild(options)
    tbody.appendChild(tr);
}

function onSubmitForm(event){
    event.preventDefault(); // to avoid the submission and reload of the page
    let employeeData = {
        name: form["name"].value,
        employeeID: form["employeeID"].value,
        companyName: form["companyName"].value,
        salary: form["salary"].value,
        gender: form["gender"].value,
        role: form["role"].value,
        email: form["email"].value

    }
    addEmployee(employeeData);
    form.reset();
}

form.addEventListener("submit", onSubmitForm);
