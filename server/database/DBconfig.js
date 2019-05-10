const url = 'mongodb://database/rickadvisor-location';
const db = require('monk')(url, {
  poolSize: 20,
  bufferMaxEntries: 10000,
  connectTimeoutMS: 5000,
});

const hotels = db.get('hotels');
const attractions = db.get('attractions');
module.exports = { db, hotels, attractions };
