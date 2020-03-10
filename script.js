function showPosition(position) {
                
             var lat = position.coords.latitude;
             var lon = position.coords.longitude;
//             var a = parseInt(lat);
             console.log(lat,lon);
             

             if ((lat > 33) && (lat < 34) && (lon<-84) && (lon>-85)){
              console.log("This is the right location!");
              boxDD.setAttribute('visible', 'true');
             }
    } // QUESTION, CAN I PUT THE FUNCTION OUTSITE THE ARFRAME?  && (-84>lon>-85))
    
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
             