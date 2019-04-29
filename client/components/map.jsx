import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/location/restaurants/Zieme Inc')
      .then(response => response.json())
      .then((restaurants) => {
        fetch('/location/attractions/Zieme Inc')
          .then(response => response.json())
          .then((attractions) => {
            this.updateMap(restaurants, attractions);
          });
      });
  }

  // eslint-disable-next-line class-methods-use-this
  updateMap(restaurants, attractions) {
    const locations = [];
    restaurants.forEach((restaurant) => {
      const restaurantLatLong = [
        restaurant.name,
        restaurant.latitude,
        restaurant.longitude,
        'Restaurant',
      ];

      locations.push(restaurantLatLong);
    });
    attractions.forEach((attraction) => {
      const restaurantLatLong = [
        attraction.name,
        attraction.latitude,
        attraction.longitude,
        'Attraction',
      ];

      locations.push(restaurantLatLong);
    });
    console.log(locations);
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.3772, lng: -105.52 },
      zoom: 14,
    });

    const infowindow = new window.google.maps.InfoWindow();

    let marker;
    let i;
    const blueImage = new window.google.maps.MarkerImage(
      'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    );
    const redImage = new window.google.maps.MarkerImage(
      'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    );

    for (i = 0; i < locations.length; i += 1) {
      let image = redImage;
      if (locations[i][3] === 'Attraction') {
        image = blueImage;
      }
      marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(locations[i][1], locations[i][2]),
        map,
        icon: image,
      });

      window.google.maps.event.addListener(
        marker,
        'click',
        ((marker, i) => () => {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        })(marker, i),
      );
    }
  }

  render() {
    return <div style={{ width: 700, height: 400 }} id="map" />;
  }
}

export default Map;
