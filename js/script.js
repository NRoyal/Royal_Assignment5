//load page before executing anything 
$( document ).ready(function() {
	console.log("document loaded");
});

//alert("jquery Works");

//when clicking submit button, prevent page re-load and create entry value
$('#submit-btn').click(function() {
	event.preventDefault();
	addUserEntry();
});

function addUserEntry() {
	//get value of the input city
	 var city = $('#city-type').val();
	//log value in console
	console.log(city);

	//show Austin
	if (city === "Austin" || city === "austin" || city === "ATX" || city === "atx") {
		$('body').css('background-image', 'url(images/austin.jpg)');
	}
	
	//show LA
	else if (city === "Los Angeles" || city === "los angeles" || city === "LA" || city === "la" || city === "LAX" || city === "lax") {
		$('body').css('background-image', 'url(images/la.jpg)');
	}
	
	//show NY
	else if (city === "New York" || city === "new york" || city === "NY" || city === "ny" || city === "New York City" || city === "new york city") {
		$('body').css('background-image', "url(images/nyc.jpg");
	}

	//show SF
	else if (city === "San Franscisco" || city === "san franscisco" || city === "SF" || city === "sf" || city === "Bay Area" || city === "bay area") {
		$('body').css('background-image', 'url(images/sf.jpg');
	}

	//show Sydney
	else if (city === "Sydney" || city === "sydney" || city === "SYD" || city === "syd") {
		$('body').css('background-image', 'url(images/sydney.jpg');
	}

	//Default behavior 
 	else {
 		alert("No image for that city. Try again.");
 	}		
}

