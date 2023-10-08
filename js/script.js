/*
    Assignment #4
    {Muhammed Adwan}
*/

$(function () {
    // your code here
    if(!navigator.geolocation){
        $("#locationhere").html("<h3> Please enable geolocation in your browser to use this app </h3>");
    }else {
        navigator.geolocation.getCurrentPosition(success, fail);
        
        function success(pos){
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;
            let accuracy = pos.coords.accuracy;

            $("#locationhere").html("<p> Latitude: " + lat + "</p>");
            $("#locationhere").append("<p> Longitude: " + lon + "</p>");
            $("#locationhere").append("<p> Accuracy: " + accuracy + "</p>");

            let savedLat = localStorage.getItem("lat");
            let savedLon = localStorage.getItem("lon");

            if(savedLat && savedLon){
                let distance = calcDistanceBetweenPoints(lat, lon, parseFloat(savedLat), parseFloat(savedLon));

                //to convert the distance from Meters to KM
                distance = (distance/1000).toFixed(2);

                $("#locationhere").append("<p>  Previous Latitude: " + savedLat + "</p>");
                $("#locationhere").append("<p>  Previous Longitude: " + savedLon + "</p>");
                $("#locationhere").append("<h3> Welcome back!</h3>");
                $("#locationhere").append("<p>  You have travelled " + distance + " KM since your last visit</p>");
                
            }else {
                $("#locationhere").append("<h3> Welcome to our page for the first time!</h3>");
            }

            localStorage.setItem("lat", lat);
            localStorage.setItem("lon", lon);
            }

            function fail(){
                $("#locationhere").html("<h3> Unable to retrieve your location </h3>");
            }
        }


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


