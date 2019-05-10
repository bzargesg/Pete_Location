const { hotels, attractions } = require('./DBconfig.js');

let dbcount = 0;

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
    getHotelByName: hotelName => hotels.find({ name: `${hotelName}` }).then((hotels) => {
      dbcount++;
      return hotels;
    }),
  },
  attractions: {
    getAttractions: (hotelName, type) => hotels
      .find({ name: `${hotelName}` })
      .then(hotel => hotel[0])
      .then(async (hotel) => {
        dbcount++;
        const hotelLatitude = hotel.latitude;
        const hotelLongitude = hotel.longitude;
        const [latLow, latHigh, longLow, longHigh] = getRelativeDistance(
          hotelLatitude,
          hotelLongitude,
        );
        return attractions.find(
          {
            latitude: { $gte: latLow, $lte: latHigh },
            longitude: { $gte: longLow, $lte: longHigh },
            type,
          },
          { fields: { name: 1, latitude: 1, longitude: 1 } },
        );
      }),
    getRestaurants: hotelName => dbcount,
  },
};
