let selectedRow = null;

function onFormSubmit() {
    let formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    return {
        Fullname: document.getElementById("fullname").value,
        Employee_Id: document.getElementById("Employee_Id").value,
        salary: document.getElementById("salary").value,
        city: document.getElementById("city").value,
    };
}

function insertNewRecord(data) {
    let table = document.getElementById("empList").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();
    newRow.insertCell(0).innerHTML = data.Fullname;
    newRow.insertCell(1).innerHTML = data.Employee_Id;
    newRow.insertCell(2).innerHTML = data.salary;
    newRow.insertCell(3).innerHTML = data.city;
    newRow.insertCell(4).innerHTML = `
        <a href="#" onclick="onEdit(this)">Edit</a>
        <a href="#" onclick="deleteRecord(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("Employee_Id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Employee_Id").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Fullname;
    selectedRow.cells[1].innerHTML = formData.Employee_Id;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
    selectedRow = null;
}

function deleteRecord(td) {
    if (confirm("Are you sure to delete this record?")) {
        let row = td.parentElement.parentElement;
        document.getElementById("empList").deleteRow(row.rowIndex);
        resetForm();
    }
}
