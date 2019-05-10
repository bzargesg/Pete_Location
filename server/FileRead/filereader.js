const fs = require('fs');
const csv = require('csv-parser');

// AttractionData - Sheet1.csv
// AreasData - Sheet1.csv
// HotelData - Sheet1.csv
class FileReader {
  constructor() {
    this.data = [];
  }

  async readFile(fileName) {}

  readPromise(fileName) {
    return new Promise((resolve, reject) => {
      fs.createReadStream(`${__dirname}/${fileName}`)
        .pipe(csv())
        .on('data', (row) => {
          this.data.push(row);
        })
        .on('end', () => {
          console.log('CSV succesfully processed');
          resolve(this.data);
        });
    });
  }
}
const fr = new FileReader();

// fr.readPromise('AttractionData - Sheet1.csv').then(val => console.log(val[0]));
module.exports = fr;
