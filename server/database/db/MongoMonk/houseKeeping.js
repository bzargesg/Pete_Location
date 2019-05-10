const url = 'localhost:27017/rickadvisor-location';
const db = require('monk')(url);
const hotels = db.get(`hotels`);
const attractions = db.get('attractions');

var testme = [
  "Lubowitz - D'Amore",
  "Turner, Anderson and Hoppe",
  "Dicki - Veum",
  "McGlynn, Berge and Harris",
  "Wolff - MacGyver",
  "Konopelski, Metz and Rowe",
  "Wyman, Boyle and Braun",
  "Bogisich - Dickens",
  "Okuneva Inc",
  "Rowe, Monahan and Schaefer",
  "Shields - Waelchi",
  "Rohan Inc",
  "Considine, Kiehn and Corwin",
  "Greenholt, Cartwright and Zieme",
  "Zieme Inc",
  "Bruen, Streich and Ondricka",
  "Mueller, Walsh and Hermann",
  "Larson, Osinski and MacGyver",
  "Mayert, Schultz and Kuhic",
  "Altenwerth Inc",
  "Braun - Quigley",
  "Tillman, Hickle and O'Connell",
  "Yost and Sons",
  "Gibson - Nitzsche",
  "Powlowski, McClure and Orn",
  "Stoltenberg, Witting and Maggio",
  "Batz - Mueller",
  "Hansen - Vandervort",
  "Hartmann Group",
  "Stanton - Wolff",
  "Quigley Group",
  "Armstrong and Sons",
  "Schumm - Schumm",
  "Hyatt, Armstrong and Stracke",
  "Schmidt Group",
  "Ruecker LLC",
  "Strosin - Roob",
  "Rempel - Zulauf",
  "Zieme - Collier",
  "Greenfelder, King and Deckow",
  "Armstrong - Kunze",
  "Kiehn LLC",
  "Weissnat, Price and Toy",
  "Dietrich Inc",
  "Walker Group",
  "Feeney LLC"]
// ~.2 s debt on startup
var mongoTest = async (nameHot) => {
return hotels.find({name: `${nameHot}`})
.then(async hotel =>{
  hotel.forEach(async element => {
  let hotelLatitude = element.latitude;
  let hotelLongitude = element.longitude;
  let [latLow, latHigh, longLow, longHigh]=getRelativeDistance(hotelLatitude,hotelLongitude);
  attrInRange = await attractions.find({latitude:{$gte: latLow, $lte: latHigh}, longitude:{$gte: longLow, $lte: longHigh}})
  // console.log(attrInRange);
});
})
}

const getRelativeDistance=(latitude,longitude) =>{
  let latLow, latHigh, longLow, longHigh;
  latLow = latitude - .1;
  latHigh = latitude + .1;
  longLow = longitude - .1;
  longHigh = longitude + .1;
  return [latLow, latHigh, longLow, longHigh];
}
var dostuff= async ()=>{
  for await (const name of testme){
await mongoTest(name);
}
return;
}
dostuff()
.then(()=>{
  db.close();
})

// hotels.find(null, 'postalcode',{ stream: true })
//   .each(function(doc, {close,pause,resume}){
//     i++;
//     // console.log('looking for: ',doc.postalcode);
//     pause();
//     attractions.find({postalcode: doc.postalcode}, '_id')
//     .then(stuff =>{
//       // console.log('got: ',stuff);
//       resume();
//     });
//     if(i % 10 === 0){
//       console.log(i);
//     }
//   })
//   .then(function(){
//     // final callback
//   })
//   .catch(function(err){
//     // handle error
//   });
  