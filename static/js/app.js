// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Clear existing data
function buildTable(data){
    tbody.html(" ");

// Loop through data and append row/cells for each value in the row
data.forEach((dataRow) => {

// Append a row to the table body
    let row = tbody.append("tr");

// Loop though dataRow and add values as table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}