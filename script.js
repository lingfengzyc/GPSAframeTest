AFRAME.registerComponent('school-playground', {
        init: function () {
          // Solution for Handling Events.
          var sceneEl = document.querySelector('a-scene'); 
          var boxEl = sceneEl.querySelector('a-box')
          
//          boxEl.addEventListener('click', function () {
//            boxEl.setAttribute('material','color','red');  
//          });
          
          sceneEl.addEventListener('click',function(){
            if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            sceneEl.innerHTML = "Geolocation is not supported by this browser.";
          }
            function showPosition(position) {
                
             var lat = position.coords.latitude;
             var lon = position.coords.longitude;
    
//            sceneEl.innerHTML = "Latitude: " + lat + "<br>Longitude: "  + lon;

             if ((32<lat<34) && (-84>lon>-85)){
                console.log("This is the right location!");
                boxEl.setAttribute('visible', 'true');
           
      }    
            
//            sceneEl.innerHTML = "Latitude: " + position.coords.latitude +
//            "<br>Longitude: "  + position.coords.longitude;
            }
              
          });
                                   
                                   
          
        }
  })