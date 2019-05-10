const faker = require('faker');
const fs = require('fs');

faker.seed(223);
const randomNum = number => Math.floor(Math.random() * number);
const fileWriter = (fileName = 'hotels') => {
  const attractionType = ['attraction', 'restaurant'];
  let rows = '\n';
  let columnNames = [];
  if (fileName === 'attractions') {
    columnNames = ['name', 'type', 'latitude', 'longitude', 'postalcode'];
  } else if (fileName === 'areas') {
    columnNames = ['addr1', 'city', 'postalcode'];
  } else if (fileName === 'hotels') {
    columnNames = [
      'name',
      'addr1',
      'walkablescore',
      'city',
      'state',
      'phone',
      'postalcode',
      'latitude',
      'longitude',
      'nearestairport',
      'nearestairportdistance',
    ];
  }
  fs.writeFileSync(`./${fileName}.csv`, columnNames.join(','));
  for (let i = 1; i < 10000001; i++) {
    columnNames.forEach((columnTitle) => {
      if (columnTitle === 'name') {
        rows += `"${faker.company.companyName()}",`;
      } else if (columnTitle === 'type') {
        rows += `${attractionType[randomNum(2)]},`;
      } else if (columnTitle === 'latitude') {
        rows += `${faker.address.latitude()},`;
      } else if (columnTitle === 'longitude') {
        rows += `${faker.address.longitude()},`;
      } else if (columnTitle === 'postalcode') {
        rows += `"${faker.address.zipCode()}",`;
      } else if (columnTitle === 'addr1' || columnTitle === 'nearestairport') {
        rows += `"${faker.address.streetAddress()}",`;
      } else if (columnTitle === 'city') {
        rows += `"${faker.address.city()}",`;
      } else if (columnTitle === 'state') {
        rows += `"${faker.address.state()}",`;
      } else if (columnTitle === 'walkablescore' || columnTitle === 'nearestairportdistance') {
        rows += `${randomNum(100)},`;
      } else if (columnTitle === 'phone') {
        rows += `"${faker.phone.phoneNumber()}",`;
      }
    });
    rows = rows.slice(0, rows.length - 1);
    rows += '\n';
    if (i % 100 === 0) {
      fs.appendFileSync(`./${fileName}.csv`, rows);
      rows = '';
    }
  }
};
// fileWriter();
fileWriter('attractions');
