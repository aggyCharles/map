import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
    selector: 'app-load-live-map',
    templateUrl: './load-live-map.component.html',
    styleUrls: ['./load-live-map.component.css']
})
export class LoadLiveMapComponent implements OnInit {

    constructor() { }
    public static currentPosition = { lat: 0, lng: 0, acc: 0 }

    ngOnInit(): void {
        const loader = new Loader({
            apiKey: "AIzaSyAPSCA53FLY51ch8KCjLjdP4dmQ8r0hEfI",
        });
        var map: google.maps.Map;
        var marker: google.maps.Marker;
        let circle: google.maps.Circle;

        // let currentPosition = { lat: 0, lng: 0, acc: 0 }
        navigator.geolocation.getCurrentPosition(function (position) {

            LoadLiveMapComponent.currentPosition.lat = position.coords.latitude
            LoadLiveMapComponent.currentPosition.lng = position.coords.longitude
            LoadLiveMapComponent.currentPosition.acc = position.coords.accuracy

            loader.load().then(() => {
                map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
                    center: LoadLiveMapComponent.currentPosition,
                    zoom: 8,
                });

                marker = new google.maps.Marker({
                    position: LoadLiveMapComponent.currentPosition,
                    map,
                    title: "Hello World!",
                });

                circle = new google.maps.Circle({
                    center: LoadLiveMapComponent.currentPosition,
                    radius: LoadLiveMapComponent.currentPosition.acc
                })

                circle.setMap(map)

                map.addListener("click", (loc: any) => {
                    console.log(loc.latLng)
                    const { lat, lng } = loc.latLng;
                    map.setZoom(8);
                    LoadLiveMapComponent.currentPosition = { lat: lat(), lng: lng(), acc: 0 }

                    marker.setMap(null);
                    circle.setMap(null);

                    circle = new google.maps.Circle({
                        center: LoadLiveMapComponent.currentPosition,
                        radius: LoadLiveMapComponent.currentPosition.acc
                    })
                    marker = new google.maps.Marker({
                        position: LoadLiveMapComponent.currentPosition,
                        map,
                        title: "Hello World!",
                    });
                    map.setCenter(marker.getPosition() as google.maps.LatLng);
                });
            });
        });
    }


    codeAddress(): void {
        console.log('am here')
        console.log(LoadLiveMapComponent.currentPosition)
        let geocoder = new google.maps.Geocoder;
        geocoder.geocode({ location: LoadLiveMapComponent.currentPosition })
            .then(response => {
                console.log(response)
                let place_name = document.getElementById("place_name") as HTMLElement
                place_name.innerText = JSON.stringify(response.results[0].formatted_address)
                let place_keys = document.getElementById("place_keys") as HTMLElement
                place_keys.innerText = JSON.stringify(response.results[0].address_components.map(item => {
                    return item.long_name
                }))


            }).catch(error => {
                console.log(error)
            })
    }

}
