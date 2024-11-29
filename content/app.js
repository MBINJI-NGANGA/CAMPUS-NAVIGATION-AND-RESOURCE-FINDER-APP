//set the map option

var mylatlng = {lat: 38.3460, lng: -0.4907};
var mapOptions = {
    center: mylatlng,
    zoom: 7,
    maptypeid: google.maps.MaptypeId.ROADMAP
}

//create a map
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions)

// create a direction service object to use the route method and get the results for our request
var directionService = new google.maps.DirectionService();
// create a direction renderer object which we will use to display the route
var directionDisplay = new google.map.Directionrenderer();
//bind the directionsrenderer to the map
directionDisplay.setMap(map);

//function

function calcRoute() {
    var request = {
        current: document.getElementById("from").value,
        destination : document.getElementById("to").value,
        travelMode: google.maps.TravelMode.WALKING, //DRVING, BYCYCLING, TRANSIT
        unitSytem: google.maps.UnitSytem.INPERIAL
    }
    //pass the request to the route methods
    directionService.route(request, (result, status)=>{
        if (status == google.maps.DirectionsStatus.OK){
            //get distance and time
            const output = document.querySelector('#output')
            output.innerHTML = "<div class='alert-infor'> From: " + document.getElementsById("from").value + " .<br />To: " + document.getElementsById("to").value + ". <br /> WALKING distance <i class='fas fa-road'></i>:" + Result.routes[0].legs[0].distance.text + ".<br />Direction <i class'fas fa-hourglass-start'></i>: " + Result.routes[0].legs[0].duration.text + ".</div>";

            // display the routes
            directionDisplay.setDirections(result);

        } else{
            //delete routes from map
            directionDisplay.setDirections({routes: []})
            //center the map
            map.setcenter(mylatlng);

            //show erroe message
            output.innerHTML = "<div class='alert-danger'><i class'fas fa-exclamation-triangle'></i> could not retrieve WALKING distance. </div>";
        }
    });
}

//create autocomplete

var options = {
    type: ['(cities)']
}
var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options)

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options)