function updateMap() {
    fetch("https://www.trackcorona.live/api/countries")
        .then(response => response.json())
        .then(rsp => {
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                
                cases = element.confirmed;
                recovered = element.recovered;
                if(cases>10000){
                    color = "rgb(255,0,0)";
                }

                else{
                    color = `rgb(${cases/40},0,0)`;
                }

  /*          //Adding marker in the map

                var marker = new mapboxgl.Marker({
                    color: color 
                }).setLngLat([longitude, latitude])
                .addTo(map); 
                */

               var popup = new mapboxgl.Popup({offset:25}).setText(
                `Number of confirmed cases : ${cases}  Number of recoveries : ${recovered}`
            );

                // create DOM element for the marker
                var el = document.createElement('div');
                el.id = 'marker';

                // create the marker
                new mapboxgl.Marker(el)
                .setLngLat([longitude,latitude])
                .setPopup(popup)
                .addTo(map); 
            });
        })
}
let interval = 20000;
setInterval(updateMap() , interval);
