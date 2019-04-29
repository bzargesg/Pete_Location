/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
import Attractions from './components/attractions';
import HotelInfo from './components/hotelinfo/index';
import Map from './components/map';
import Restaurants from './components/restaurants';
import styles from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      attractions: [],
      hotels: [
        {
          id: 0,
          WalkableScore: 76,
          Addr1: null,
          Addr2: null,
          City: null,
          State: null,
          PostalCode: null,
          Latitude: null,
          Longitude: null,
          NearestAirport: null,
          NearestAirportDistance: null,
        },
      ],
    };
  }

  componentDidMount() {
    fetch('location/attractions/Zieme Inc')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          attractions: data,
        });
      });
    fetch('location/restaurants/Zieme Inc')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          restaurants: data,
        });
        // console.log('restaurants', this.state.restaurants);
      });
    fetch('location/hotels/Zieme Inc')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          hotels: data,
        });
        // console.log('restaurants', this.state.restaurants);
      });
  }

  render() {
    return (
      <div>
        <h2 className={styles.headerLocation}>Location</h2>
        <Map restaurants={this.state.restaurants} />
        <div className={styles.locationsContainer}>
          <div className="hotelInfoContainer">
            <HotelInfo hotels={this.state.hotels} />
          </div>
          <div className="restaurantsContainer">
            <Restaurants restaurants={this.state.restaurants} />
          </div>
          <div className="activitiesContainer">
            <Attractions attractions={this.state.attractions} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('location'));
