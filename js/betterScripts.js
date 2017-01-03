//load page before executing anything 
$( document ).ready(function() {
    console.log("document loaded");
});

alert("jquery Works");

//when clicking submit button, prevent page re-load and create entry value
$('#submit-btn').click(function() {
		event.preventDefault();
		addUserEntry();
	});

function addUserEntry() {
	//get value of the input city & convert to lower case
	var city = $('#city-type').val().toLowerCase();
	//or write 
	city = city.toLowerCase().trim(); //doesn't take an argument b/c it is cained to an object

	//how to remove input after submitting value
	$('#city-type').val('');

	//log value in console
	console.log(city);

//arrays for all city options
var austin = ["austin", "atx"];
var la = ["los angeles", "la", "lax"];
var ny = ["new york", "new york city", "ny", "nyc"];
var sf = ["san franscisco", "sf", "bay area"];
var sydney = ["sydeny", "syd"];

Need to know if string matches array 


