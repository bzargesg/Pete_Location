import React from 'react';
import styles from '../style.css';

class Attractions extends React.Component {
  render() {
    let count = 0;
    return (
      <div className={styles.attractionsContainer}>
        <span>
          <div className={styles.attractionsCount}>{this.props.attractions.length}</div>
          <div className={styles.Contact}>Nearby Attractions</div>
        </span>
        {this.props.attractions.map((attraction) => {
          count++;
          if (count < 5) {
            return <div key={attraction.id}>{attraction.Name}</div>;
          }
        })}
      </div>
    );
  }
}

export default Attractions;
