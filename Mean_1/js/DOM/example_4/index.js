const form = document.forms[0];
const inputElements = form.querySelectorAll("input");
const container = document.getElementById("container");
const saveButton = form.querySelector(".save-button");


function getUserInfo() {
  const user = {
    "name": inputElements[0].value,
    "age": inputElements[1].value,
    "email": inputElements[2].value,
    "password": inputElements[3].value,
    "job": inputElements[4].value,
    "salary": inputElements[5].value
  };
  return user;
}

saveButton.addEventListener("click", (event) => {
  event.preventDefault();
  const user = getUserInfo();
  console.log(Object.values(user));
  const table = createTable(user);
  container.appendChild(table);
});



function createTable(user) {
  const table = document.createElement("table");
  const tableHeadingRow = document.createElement("tr");
  const columnNames = ["Name", "Age", "Email", "Password", "Job", "Salary"];

  table.setAttribute("border", "1");

  for (let columnName of columnNames) {
    const th = document.createElement("th");
    th.innerHTML = columnName;
    tableHeadingRow.appendChild(th);
  }

  const tableDataRow = document.createElement("tr");

  for (let value of Object.values(user)) {
    const td = document.createElement("td");
    td.innerHTML = value;
    tableDataRow.appendChild(td);
  }

  table.appendChild(tableHeadingRow);
  table.appendChild(tableDataRow);

  return table;
}