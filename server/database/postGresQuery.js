const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[environment];
const knex = require('knex')(config);

const getRelativeDistance = (latitude, longitude) => {
  let latLow;
  let latHigh;
  let longLow;
  let longHigh;
  latLow = latitude - 0.1;
  latHigh = latitude + 0.1;
  longLow = longitude - 0.1;
  longHigh = longitude + 0.1;
  return [latLow, latHigh, longLow, longHigh];
};
module.exports = {
  hotels: {
    getHotelByName: hotelName =>
      // return promise
      knex('hotels')
        .where({ name: `${hotelName}` })
        .then(hotels => hotels[0]),
  },
  attractions: {
    getAttractions: (hotelName, type) =>
      // return promise
      knex('hotels')
        .where({ name: `${hotelName}` })
        .then((hotel) => {
          const hotelLatitude = Number(hotel[0].latitude);
          const hotelLongitude = Number(hotel[0].longitude);
          const [latLow, latHigh, longLow, longHigh] = getRelativeDistance(
            hotelLatitude,
            hotelLongitude,
          );
          return knex('attractions')
            .where('latitude', '>', latLow)
            .andWhere('latitude', '<', latHigh)
            .andWhere('longitude', '>', longLow)
            .andWhere('longitude', '<', longHigh)
            .andWhere('type', type);
        }),
  },
};
