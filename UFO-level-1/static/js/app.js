// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("#ufo-table");
var input_date = d3.select("#datetime");
var input_city = d3.select("#city");
var input_state = d3.select("#state");
var input_country = d3.select("#country");
var input_shape = d3.select("#shape");
var date_search_button = d3.select("#filter-btn");

function search() {

    var input_date_value = input_date.property("value");
    var input_city_value = input_city.property("value");
    var input_state_value = input_state.property("value");
    var input_country_value = input_country.property("value");
    var input_shape_value = input_shape.property("value");
    tbody.selectAll("td").remove();
    //var search_result = tableData.filter(data_entry => data_entry.datetime == input_date_value && data_entry.city == input_city_value && data_entry.state == input_state_value && data_entry.country == input_country_value && data_entry.shape == input_shape_value);
    //var search_result = tableData.filter(data_entry => data_entry.datetime == input_date_value && data_entry.city == input_city_value && data_entry.state == input_state_value && data_entry.country == input_country_value);
    var search_result = tableData.filter(data_entry => data_entry.shape == input_shape_value);
    search_result.forEach((data_entry) => {
        var row = tbody.append("tr");
        Object.values(data_entry).forEach((data_element) =>{
            row.append("td").text(data_element);
        });
    });
    console.log(search_result);
}

//d3.selectAll("li").on("change", search);
date_search_button.on("click", search);