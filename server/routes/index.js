const router = require('express').Router();
const redis = require('redis');
const db = require('../database/mongoQueryDB');

const client = redis.createClient();
client.on('connect', () => {
  console.log('Redis client connected');
});
client.on('error', () => {
  console.log('redis failed to connect');
});
router.get('/restaurants/:hotelName', (req, res) => {
  const { hotelName } = req.params;
  client.get(`rest:${hotelName}`, (err, restaurants) => {
    if (!restaurants) {
      db.attractions.getAttractions(hotelName, 'restaurant').then((restaurantsInRange) => {
        client.set(`rest:${hotelName}`, JSON.stringify(restaurantsInRange));
        res.json(restaurantsInRange);
      });
    } else {
      res.json(JSON.parse(restaurants));
    }
  });
});
router.get('/attractions/:hotelName', (req, res) => {
  const { hotelName } = req.params;
  client.get(`attr:${hotelName}`, (err, attractions) => {
    if (!attractions) {
      db.attractions.getAttractions(hotelName, 'attraction').then((restaurantsInRange) => {
        client.set(`attr:${hotelName}`, JSON.stringify(restaurantsInRange));
        res.json(restaurantsInRange);
      });
    } else {
      res.json(JSON.parse(attractions));
    }
  });
});
router.get('/hotels/:hotelName', (req, res) => {
  db.hotels.getHotelByName(req.params.hotelName).then(hotel => res.json(hotel));
});
// router.get('/distanceMatrix', controller.distanceMatrix.update);
// router.get('/geocode', controller.distanceMatrix.geocode);
// router.get('/initialize', controller.distanceMatrix.initialize);

module.exports = router;
// const { hotelName } = req.params;
// client.get(hotelName, (err, restaurants) => {
//   if (restaurants) {
//     console.log('got rest', restaurants);
//     res.json(JSON.parse(restaurants));
//   } else {
//     db.attractions.getAttractions(hotelName, 'restaurants').then((restaurantsInRange) => {
//       console.log('did not get rest', restaurantsInRange);

//       // client.set(hotelName, JSON.stringify(restaurantsInRange));
//       res.json(restaurantsInRange);
//     });
//   }
// });
