import React from 'react';
import styles from '../style.css';

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let count = 0;

    return (
      <div>
        <span className={styles.restaurantHeaderContainer}>
          <div className={styles.restaurantCount}>{this.props.restaurants.length}</div>
          <div className={styles.restaurantHeader} />
        </span>
        <span className={styles.Contact}>Nearby Restaurants</span>
        {this.props.restaurants.map((restaurant) => {
          count += 1;
          if (count < 5) {
            return <div key={restaurant.id}>{restaurant.Name}</div>;
          }
        })}
      </div>
    );
  }
}

export default Restaurants;
