const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[environment];
var knex = require('knex')(config);
var fs = require('fs');
var copyFrom = require('pg-copy-streams').from;

var fileStreamer = async (fileName, dbName, dbCols) =>{
  knex(dbName).del();
  knex(dbName).client
		.pool.acquire()
		.promise.then(client => {
			function done (err) {
        
				if (err) {
					console.log(err)
				}
				else {
					console.log('success')
					knex.client.pool.release(client);
				}
				
			}

			const stream = client.query(copyFrom(`COPY ${dbName}(${dbCols}) FROM STDIN DELIMITER ',' CSV HEADER;`))
			const fileStream = fs.createReadStream(`${fileName}`)
      fileStream.pipe(stream)
			.on('error', ()=> done())
			stream.on('error', ()=>done())
			.on('end',()=> done())
			
		})
}

// fileStreamer('./AreasData - Sheet1.csv','areas','addr1, city, postalcode');
(async () => {
await fileStreamer('./hotels.csv','hotels','name, addr1, walkablescore, city, state, phone, postalcode, latitude, longitude, nearestairport, nearestairportdistance');
await fileStreamer('./attractions.csv','attractions','name, type, latitude, longitude, postalcode');
// knex.destroy();
})()