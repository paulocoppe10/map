function mostraMapa(lat, long){
       L.mapquest.key = 'kWW5HhpAJv5mzs3xMb2tozru1Mo2jFAl';

        var map = L.mapquest.map('map', {
          center: [37.7749, -122.4194],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
}


$(document).on("click","#local",function(){
 var onSuccess = function(position) {
   function mostraMapa(position.coords.latitude, position.coords.longitude)
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

