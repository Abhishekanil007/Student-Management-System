let editOptions = {
    isEditing: false,
    rowElement: null
}


function onEditClick(event){
    const row = event.target.parentNode.parentNode;
    const cells = row.querySelectorAll("td");
    let employeeInfo = {
        name: cells[0].innerText,
        employeeId: cells[1].innerText,
        companyName: cells[2].innerText,
        salary: cells[3].innerText,
        gender: cells[4].innerText,
        role: cells[5].innerText,
        email: cells[6].innerText

    }
    preFillForm(employeeInfo);
    
    editOptions = {
        isEditing:true,
        rowElement: row
    }  
    
    submitButton.innerText = "Update";
}

function preFillForm(employee){
    form["name"].value = employee.name;
    form["email"].value = employee.email;
    form["employeeID"].value = employee.employeeId;
    form["salary"].value = employee.salary;
    form["gender"].value = employee.gender;
    form["companyName"].value = employee.companyName;
    form["role"].value = employee.role;

    

}

function editEmployee(employee)
{
    // edit the tr with new employee data.

    const rowElement = editOptions.rowElement;

    let cells = rowElement.querySelectorAll("td");

    cells[0].innerText = employee.name;
    cells[1].innerText = employee.employeeID;
    cells[2].innerText = employee.companyName;
    cells[3].innerText = employee.salary;
    cells[4].innerText = employee.gender;
    cells[5].innerText = employee.role;
    cells[6].innerText = employee.email;

    submitButton.innerText = "Add Employee";

    // we need to reset the edit options state
    editOptions = {
        isEditing:false,
        rowElement:null
    }
}