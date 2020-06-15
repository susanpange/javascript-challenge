// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("#ufo-table");
var input_form = d3.select("#datetime");
//var date_search_button = d3.select("#filter-btn");

function datetime_search() {

    var input_date = d3.event.target.value;
    tbody.selectAll("td").remove();
    var search_result = tableData.filter(data_entry => data_entry.datetime == input_date);
    search_result.forEach((data_entry) => {
        var row = tbody.append("tr");
        Object.values(data_entry).forEach((data_element) =>{
            row.append("td").text(data_element);
        });
    });
    console.log(search_result);
}

input_form.on("change", datetime_search);
//date_search_button.on("click", datetime_search);