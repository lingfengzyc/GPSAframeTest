
function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

//Calculate whether the current lat and lon are within the desired radius of the target
function inRadius(currentlat,currentlon,targetlat,targetlon,desiredRadius){
    var R = 6371e3; // metres
    var phi1 = degrees_to_radians(currentlat);
    var phi2 = degrees_to_radians(targetlat);
    var deltaphi = degrees_to_radians(targetlat-currentlat);
    var deltalambda = degrees_to_radians(targetlon-currentlon);
    
    var a = Math.sin(deltaphi/2) * Math.sin(deltaphi/2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltalambda/2) * Math.sin(deltalambda/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var d = R * c;
    if (d<desiredRadius) {
      return true;
    }
    else {
      return false;
    }
}


function showPosition(position) {
                
             var lat = position.coords.latitude;
             var lon = position.coords.longitude;
//             var a = parseInt(lat);
             console.log(lat,lon);
             
            // TSRB = 33.777560, -84.390040 -- put the target lat and lon here
            // Yuchen's apartment= 33.780667799999996 -84.4118362
            TSRBlat = 33.780667799999996;
            TSRBlon = -84.4118362;
           
            var targetRadius = 50; // Setting the desired radius to 50 meters - this can be changed
             if (inRadius(lat,lon,TSRBlat,TSRBlon,targetRadius)){
              console.log("Within radius!");
              boxDD.setAttribute('visible', 'true');
             } else {
              console.log("Outside of radius");
              boxDD.setAttribute('visible', 'false');
             }
        } 

AFRAME.registerComponent('school-playground', {
        init: function () {
          // Solution for Handling Events.
          var sceneEl = document.querySelector('a-scene'); 
          var boxEl = sceneEl.querySelector('a-box')
          
//          boxEl.addEventListener('click', function () {
//            boxEl.setAttribute('material','color','red');  
//          });
          
//          sceneEl.addEventListener('click',function(){
//            if (navigator.geolocation) {
//            navigator.geolocation.getCurrentPosition(showPosition);
//          } else {
//            sceneEl.innerHTML = "Geolocation is not supported by this browser.";
//          }
            
    
//            sceneEl.innerHTML = "Latitude: " + lat + "<br>Longitude: "  + lon;

//             if ((32<lat<34) && (-84>lon>-85)){
//                console.log("This is the right location!");
//                boxEl.setAttribute('visible', 'true');
           
      },    
            
//            sceneEl.innerHTML = "Latitude: " + position.coords.latitude +
//            "<br>Longitude: "  + position.coords.longitude;
        
      tick: function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            sceneEl.innerHTML = "Geolocation is not supported by this browser.";
          }
              
          }
});
             