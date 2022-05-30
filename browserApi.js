/* 
What is Web API?
API stands for : Application Programming Interface.

A Web API: is an application programming interface for the Web.

1. A Browser API can extend the functionality of a web browser.
2. A Server API can extend the functionality of a web server.


## Browser APIs
===============
All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.

For example, the Geolocation API can return the coordinates of where the browser is located.
*/

// Get the latitude and longitude of the user's position:

const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}


/*

Local stroage and Sesson storage

*/