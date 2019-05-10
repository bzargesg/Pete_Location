import React from 'react';
import styles from '../../style.css';

class HotelInfo extends React.Component {
  render() {
    return (
      <div>
        <span className={styles.walkingScoreContainer}>
          <div className={styles.walkingScore}>76</div>
          <div className={styles.walkingScore1}>Somewhat walkable</div>
          <div className={styles.walkingScore2}>
            Grade:
            {' '}
            {this.props.hotels[0].walkablescore}
            {' '}
out of 100
            <br />
          </div>
        </span>

        <span className={styles.Contact}>
          {' '}
          <br />
          Contact
          <br />
        </span>
        <span>
          {this.props.hotels[0].addr1}
,
          {this.props.hotels[0].City}
,
          {this.props.hotels[0].state}
,
          {this.props.hotels[0].postalcode}
          <br />
        </span>
        <span>
          {this.props.hotels[0].phone}
          {' '}
          <p />
        </span>
        <span className={styles.Contact}>
          Getting There
          <br />
        </span>
        <span>
          {this.props.hotels[0].nearestairport}
          {' '}
          {this.props.hotels[0].nearestairportdistance}
          {' '}
mi
        </span>
      </div>
    );
  }
}

export default HotelInfo;
