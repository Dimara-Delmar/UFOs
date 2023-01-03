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

// Grab the datetime value from the filter
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

//Check if date was entered and filter the data by date
    if (date){
    
// Appy 'filter' to the table data to keep the matching data
        filteredData = filteredData.filter(row => row.datetime === date);
    }

// Rebuild the table using filtered daata
// NOTE: if no date was entered, the filteredData will be original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
