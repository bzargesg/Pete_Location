/* eslint-disable func-names */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
// eslint-disable-next-line func-names
const fr = require('../../FileRead/filereader.js');
// const config = require('../../../knexfile.js')[environment];


exports.seed = (knex, Promise) =>{
  
  // pg.connect((err,client,done)=>{
  //   if(err) throw err;
  //   const query = new QueryStream("COPY attractions(name, latitude, longitude) FROM '../../FileRead/AttractionData - Sheet1.csv' DELIMITER ',' CSV HEADER;");
  //   const stream = client.query(query);
  //   stream.on('end', done);
  // })
  // pg.connect((err, client, done)=>{
  //   var stream = client.query(copyFrom("COPY attractions(name, latitude, longitude) FROM '../../FileRead/AttractionData - Sheet1.csv' DELIMITER ',' CSV HEADER;"));
  //   var fileStream = fs.createReadStream('../../FileRead/AttractionData - Sheet1.csv');
  //   fileStream.on('error', done);
  //   fileStream.pipe(stream).on('finish',done).on('error',done)
  // });
}



// exports.seed = function (knex, Promise) {
//   const insPromise = csvRow =>
//     knex('attractions').insert({
//       name: csvRow.name,
//       type: 'attraction',
//       latitude: csvRow.latitude,
//       longitude: csvRow.longitude,
//       areaID: 5,
//     });
//   return Promise.join(
//     knex('attractions').del(),
//     fr.readPromise('AttractionData - Sheet1.csv').then((val) => {
//       const kpromArr = [];
//       val.map((csvRow) => {
//         kpromArr.push(insPromise(csvRow));
//       });
//       return Promise.all(kpromArr);
//     }),
//   );
// };
